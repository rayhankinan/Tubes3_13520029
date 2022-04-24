import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { dnaMatching, formatDate, formatSimilarty } from "../../lib";
import UploadImage from "../../assets/images/upload.png";
import styles from "./DnaTest.module.css";
import axios from "axios";
import { useEffect } from "react";

const DnaTest = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const nameRef = useRef(null);
  const diseaseRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);
  const [file, setFile] = useState(false);
  const URL = "http://localhost:3000/api/predictions/";

  useEffect(() => {
    console.log(data);
  }, [data]);

  const showFile = async (e) => {
    e.preventDefault();
    setFile(true);
    textRef.current.textContent = "File has been uploaded!";
    infoRef.current.textContent = `${e.target.files[0].name}`;
    const reader = new FileReader();
    reader.onload = async (e) => {
      setText(e.target.result.trim());
      if (dnaMatching(text)) {
        setValid(true);
      } else setValid(false);
    };
    reader.readAsText(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      window.alert(`Please upload file first!`);
      return;
    } else if (!valid) {
      window.alert(
        `Please input correct DNA sequence in the'${diseaseRef.current.value}'!`
      );
      return;
    } else {
      let body = {
        User: nameRef.current.value,
        Disease: diseaseRef.current.value,
        DNASequence: text,
        IsKMP: true,
      };
      axios({
        method: "post",
        url: URL,
        data: body,
      })
        .then((res) => {
          setStatus(true);
          setData(res.data);
          setDate(formatDate(res.data.PredictionDate));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setIsSubmitted(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            DNAobama
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.heading}>Do a DNA test</h1>
          <h2 className={styles.subheading}>
            Check if a certain patient has a certain genetic disease.
          </h2>
        </div>
        {!status && (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.diseaseInput}
              placeholder="Patient name"
              ref={nameRef}
            />
            <input type="file" id="file-btn" onChange={showFile} hidden />
            <label htmlFor="file-btn" className={styles.fileUploadLabel}>
              <div className={styles.fileUploadContainer}>
                <img
                  src={UploadImage}
                  className={styles.fileUploadImage}
                  alt=""
                />
                <p className={styles.fileUploadText} ref={textRef}>
                  Upload DNA sequence here ...
                </p>
                <p className={styles.fileUploadInfo} ref={infoRef}>
                  You have not yet uploaded a DNA sequence!
                </p>
              </div>
            </label>
            <input
              type="text"
              className={styles.diseaseInput}
              placeholder="Disease name"
              ref={diseaseRef}
            />
            <button className={styles.uploadButton}>Submit</button>
          </form>
        )}
        <div className={styles.resultContainer}>
          <h2 className={styles.subheading}>
            Test result will be shown below.
          </h2>
          {isSubmitted && (
            <div className={styles.resultCard}>
              <h3 className={styles.resultHeading}>Test result</h3>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Date</p>
                <p className={styles.resultInfoL}>{date}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Patient</p>
                <p className={styles.resultInfoL}>{data.User}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Disease</p>
                <p className={styles.resultInfoL}>{data.Disease}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Similarity</p>
                <p className={styles.resultInfoL}>
                  {formatSimilarty(data.Similarity)}
                </p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Result</p>
                <p className={styles.resultInfoL}>
                  {data.PredictionStatus === true ? "True" : "False"}
                </p>
              </div>
            </div>
          )}
          {!isSubmitted && (
            <p className={styles.testInfo}>You haven't done a test yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DnaTest;
