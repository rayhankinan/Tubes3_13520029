import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Home1 from "../../assets/images/home-1.png";
import Home2 from "../../assets/images/home-2.png";
import Home3 from "../../assets/images/home-3.png";

const Home = () => {
  return (
    <div className={styles.root}>
      {/* heading  */}
      <p className={styles.title}>DNAObama</p>
      {/* title  */}
      <div className={styles.container}>
        <p className={styles.heading}>
          {" "}
          Your go-to <br /> solution for detecting <br /> genetic disorders.{" "}
        </p>
        <img src={Home1} className={styles.home1} />
        <img src={Home2} className={styles.home2} />
        <img src={Home3} className={styles.home3} />
      </div>
      {/* image  */}
      {/* end of image  */}
      {/* cards  */}
      <p className={styles.subtitle}>What do you want to do?</p>
      <div className={styles.cardContainer}>
        {/* single card  */}
        <div className={styles.card}>
          {/* image  */}
          {/* text  */}
          <p className={styles.cardTitle}>Add Genetic disorder</p>
          <p className={styles.cardDesc}>
            Add a new genetic disorder to the database alongside it's DNA
            sequence
          </p>
          <button className="btn">
            <Link to="/add">Go!</Link>
          </button>
        </div>
        {/* end of single card  */}
        {/* single card  */}
        <div className={styles.card} id={styles.two}>
          {/* image  */}
          {/* text  */}
          <p className={styles.cardTitle}>Do a DNA test</p>
          <p className={styles.cardDesc}>
            Check if a certain patient has a certain genetic disease.
          </p>
          <button className="btn">
            <Link to="/add">Go!</Link>
          </button>
        </div>
        {/* end of single card  */}
        {/* single card  */}
        <div className={styles.card} id={styles.three}>
          {/* image  */}
          {/* text  */}
          <p className={styles.cardTitle}>Search patient</p>
          <p className={styles.cardDesc}>
            See a list of past tests by entering a date or a genetic disease.
            You can also search for a combination of them.
          </p>
          <button className="btn">
            <Link to="/add">Go!</Link>
          </button>
        </div>
        {/* end of single card  */}
      </div>
    </div>
  );
};

export default Home;
