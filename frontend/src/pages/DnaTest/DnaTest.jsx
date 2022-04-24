import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { dnaMatching, formatDate, formatSimilarty } from "../../lib";
import UploadImage from "../../assets/images/upload.png";
import styles from "./DnaTest.module.css";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const DnaTest = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const nameRef = useRef(null);
  const diseaseRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
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
    const tmp = (await e.target.files[0].text()).trim();
    if (dnaMatching(tmp) && tmp.length > 0) {
      setValid(true);
    } else setValid(false);
    setText(tmp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value == '' || diseaseRef.current.value == '') {
      toast.error("Please fill out the form first!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setData({})
      return;
    }
    if (!file) {
      toast.error("Please upload file first!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!valid) {
      setData({});
      toast.error("Please upload a correct DNA sequence!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
          setData(res.data);
          setDate(formatDate(res.data.PredictionDate));
          toast.success("Test done successfully!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          setData({})
          console.log(err);
          if (err.response.status === 404) {
            toast.error("Disease not found at database!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.error("Oops, something wrong happened at the server side!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
    setIsSubmitted(true);
  };

  return (
    <div className={styles.root}>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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

        <div className={styles.resultContainer}>
          <h2 className={styles.subheading}>
            Test result will be shown below.
          </h2>
          {isSubmitted && Object.keys(data).length != 0 && (
            <div className={styles.resultCard}>
              <h3 className={styles.resultHeading}>Test result</h3>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Date</p>
                <p className={styles.resultInfoR}>{date}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Patient</p>
                <p className={styles.resultInfoR}>{data.User}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Disease</p>
                <p className={styles.resultInfoR}>{data.Disease}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Similarity</p>
                <p className={styles.resultInfoR}>
                  {formatSimilarty(data.Similarity)}
                </p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Result</p>
                <p className={styles.resultInfoR}>
                  {data.PredictionStatus === true ? "True" : "False"}
                </p>
              </div>
            </div>
          )}
          {isSubmitted && Object.keys(data).length == 0 && (
            <p className={styles.testInfo}>An error occured on searching!</p>
          )}
          {!isSubmitted && Object.keys(data).length == 0 && (
            <p className={styles.testInfo}>You haven't done a test yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DnaTest;
