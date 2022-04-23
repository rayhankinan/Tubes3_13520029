import styles from "./GeneticDisorder.module.css";
import { Link } from "react-router-dom";
import UploadImage from "../../assets/images/upload.png"

const GeneticDisorder = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>DNAobama</p>
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.heading}>
            Add genetic disorder
          </h1>
          <h2 className={styles.subheading}>
            Add a new genetic disorder to the database alongside it's DNA sequence.
          </h2>
        </div>
        <form className={styles.formContainer}>
          <input type="text" className={styles.diseaseInput} placeholder="Disease name"/>
          <input type="file" id="file-btn" hidden/>
          <label htmlFor="file-btn" className={styles.fileUploadLabel}>
            <div className={styles.fileUploadContainer}>
              <img src={UploadImage} className={styles.fileUploadImage} alt="" />
              <p className={styles.fileUploadText}>Upload DNA sequence here ...</p>
              <p className={styles.fileUploadInfo}>You have not yet uploaded a DNA sequence!</p>
            </div>
          </label>
          <button className={styles.uploadButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GeneticDisorder;
