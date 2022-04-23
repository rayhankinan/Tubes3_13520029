import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { dnaMatching, inputMatching, parsingDate } from "../../lib";
import styles from "./GeneticDisorder.module.css";
import UploadImage from "../../assets/images/upload.png";
import axios from "axios";

const GeneticDisorder = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const diseaseRef = useRef(null);
  const [valid, setValid] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState(false);

  const URL = "http://localhost:3000/api/diseases";

  const showFile = async (e) => {
    e.preventDefault();
    setFile(true);
    textRef.current.textContent = "File has been uploaded!";
    infoRef.current.textContent = `${e.target.files[0].name}`;
    const reader = new FileReader();
    reader.onload = async (e) => {
      setText(e.target.result.trim());
      if (!dnaMatching(text)) {
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
    } else {
      let body = {
        Name: diseaseRef.current.value,
        DNASequence: text,
      };
      axios({
        method: "post",
        url: URL + "",
        data: body,
      });
      setStatus(true);
    }
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
          <h1 className={styles.heading}>Add genetic disorder</h1>
          <h2 className={styles.subheading}>
            Add a new genetic disorder to the database alongside it's DNA
            sequence.
          </h2>
        </div>
        {status ? (
          <>
            <h2 className={styles.mintText}>
              Succesfully adding disease to database
            </h2>
            <h2 className={styles.subheading}>
              Press the title to go back to the dashboard
            </h2>
          </>
        ) : (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.diseaseInput}
              placeholder="Disease name"
              ref={diseaseRef}
            />
            <input
              type="file"
              id="file-btn"
              accept=".txt"
              onChange={showFile}
              hidden
            />
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
            <button className={styles.uploadButton}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default GeneticDisorder;
