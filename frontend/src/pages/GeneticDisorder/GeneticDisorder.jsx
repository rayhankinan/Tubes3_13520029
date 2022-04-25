import "react-toastify/dist/ReactToastify.css";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { dnaMatching, geneticDisorderMatching } from "../../lib";
import styles from "./GeneticDisorder.module.css";
import UploadImage from "../../assets/images/upload.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const GeneticDisorder = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const diseaseRef = useRef(null);
  const [valid, setValid] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState(false);

  const URL = "https://dna-pattern-matching.herokuapp.com/api/diseases";

  useEffect(() => {
    if (
      dnaMatching(text) &&
      text.length > 0 &&
      geneticDisorderMatching(diseaseRef.current.value)
    ) {
      setValid(true);
    } else setValid(false);
  }, [text]);

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
    if (diseaseRef.current.value == "") {
      toast.error("Please fill out the form first!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
        Name: diseaseRef.current.value,
        DNASequence: text,
      };
      axios({
        method: "post",
        url: URL,
        data: body,
      })
        .then((res) => {
          toast.success("Disease successfully added!", {
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
          toast.error("Disease name already exists!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
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
          <h1 className={styles.heading}>Add genetic disorder</h1>
          <h2 className={styles.subheading}>
            Add a new genetic disorder to the database alongside it's DNA
            sequence.
          </h2>
        </div>
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
      </div>
    </div>
  );
};

export default GeneticDisorder;
