import styles from "./GeneticDisorder.module.css";
import { Link } from "react-router-dom";
import UploadImage from "../../assets/images/upload.png"
import { useRef } from "react";

const GeneticDisorder = () => {
  const textRef = useRef(null);
  const infoRef = useRef(null);
  const diseaseRef = useRef(null);

  const handleInputChange = (e) => {
    textRef.current.textContent = "File has been uploaded!";
    infoRef.current.textContent = `${e.target.files[0].name}`
  }

  const handleSubmit = (e) => {
    window.alert(`Successfully added the disease '${diseaseRef.current.value}' to the database!`);
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>DNAobama</Link>
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.heading}>
            Add genetic disorder
          </h1>
          <h2 className={styles.subheading}>
            Add a new genetic disorder to the database alongside it's DNA sequence.
          </h2>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input type="text" className={styles.diseaseInput} placeholder="Disease name" ref={diseaseRef}/>
          <input type="file" id="file-btn" onChange={handleInputChange}hidden/>
          <label htmlFor="file-btn" className={styles.fileUploadLabel}>
            <div className={styles.fileUploadContainer}>
              <img src={UploadImage} className={styles.fileUploadImage} alt="" />
              <p className={styles.fileUploadText} ref={textRef}>Upload DNA sequence here ...</p>
              <p className={styles.fileUploadInfo} ref={infoRef}>You have not yet uploaded a DNA sequence!</p>
            </div>
          </label>
          <button className={styles.uploadButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GeneticDisorder;
