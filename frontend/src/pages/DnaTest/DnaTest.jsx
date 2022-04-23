import styles from "./DnaTest.module.css";
import { Link } from "react-router-dom";
import UploadImage from "../../assets/images/upload.png";
import { useRef, useState } from "react";

const DnaTest = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const nameRef = useRef(null);
  const diseaseRef = useRef(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});
  
  const dummyData = {
    date: "14 April 2022",
    name: "Marchotridyo",
    disease: "HIV",
    similarity: "30%",
    result: "False"
  };

  const handleInputChange = (e) => {
    textRef.current.textContent = "File has been uploaded!";
    infoRef.current.textContent = `${e.target.files[0].name}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    /* Fetch data from backend */
    let similarity = "30%";
    let result = "False";
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ];
    let currentDate = new Date();
    setData(oldData => {
      return {
        date: `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`,
        name: nameRef.current.value,
        disease: diseaseRef.current.value,
        similarity: similarity,
        result: result
      };
    });
  }

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
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.diseaseInput}
            placeholder="Patient name"
            ref={nameRef}
          />
          <input
            type="file"
            id="file-btn"
            onChange={handleInputChange}
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
          {isSubmitted && (
            <div className={styles.resultCard}>
              <h3 className={styles.resultHeading}>Test result</h3>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Date</p>
                <p className={styles.resultInfo}>{data.date}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Patient</p>
                <p className={styles.resultInfo}>{data.name}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Disease</p>
                <p className={styles.resultInfo}>{data.disease}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Similarity</p>
                <p className={styles.resultInfo}>{data.similarity}</p>
              </div>
              <div className={styles.resultFlex}>
                <p className={styles.resultInfoL}>Result</p>
                <p className={styles.resultInfo}>{data.result}</p>
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
