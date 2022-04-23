import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Home1 from "../../assets/images/home-1.png";
import Home2 from "../../assets/images/home-2.png";
import Home3 from "../../assets/images/home-3.png";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            DNAobama
          </Link>
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>
            Your go-to
            <br />
            solution for detecting
            <br />
            genetic disorders.
          </h1>
          <img src={Home1} className={styles.img1} />
          <img src={Home2} className={styles.img2} />
          <img src={Home3} className={styles.img3} />
        </div>
        <div className={styles.cardsContainer}>
          <h2 className={styles.cardsContainerHeading}>
            What do you want to do?
          </h2>
          <div className={styles.cardsFlexbox}>
            <div className={styles.yellowCard}>
              <div className={styles.cardTextContainer}>
                <h3 className={styles.cardHeading}>Add genetic disorder</h3>
                <p className={styles.cardInfo}>
                  Add a new genetic disorder to the database alongside it's DNA
                  sequence.
                </p>
              </div>
              <div className={styles.cardBtnContainer}>
                <Link to="/add-disorder" className={styles.cardButton}>
                  Go!
                </Link>
              </div>
            </div>
            <div className={styles.blueCard}>
              <div className={styles.cardTextContainer}>
                <h3 className={styles.cardHeading}>Do a DNA test</h3>
                <p className={styles.cardInfo}>
                  Check if a certain patient has a certain genetic disease.
                </p>
              </div>
              <div className={styles.cardBtnContainer}>
                <Link to="/dna-test" className={styles.cardButton}>
                  Go!
                </Link>
              </div>
            </div>
            <div className={styles.purpleCard}>
              <div className={styles.cardTextContainer}>
                <h3 className={styles.cardHeading}>Search for past tests</h3>
                <p className={styles.cardInfo}>
                  See a list of past tests by entering a date or a genetic
                  disease. You can also search for a combination of them.
                </p>
              </div>
              <div className={styles.cardBtnContainer}>
                <Link to="/search" className={styles.cardButton}>
                  Go!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
