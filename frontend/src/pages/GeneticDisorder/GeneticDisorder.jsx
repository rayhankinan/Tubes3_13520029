import styles from "./GeneticDisorder.module.css";
import { Link } from "react-router-dom";

const GeneticDisorder = () => {
  return (
    <>
      <div className="root">
        <div className={styles.center}>
          <p className="header">DNAObama</p>
          <p>Add Genetic disorder</p>
          <p>
            add a new genetic disorder to the database alongside it's dna
            sequence
          </p>
          {/* form  */}
          <form>
            <input type="text" placeholder="disease name" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneticDisorder;
