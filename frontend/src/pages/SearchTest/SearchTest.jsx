import styles from "./SearchTest.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"

const SearchTest = () => {
  const [dummyResults, setDummyResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDummyResults(oldDummyResults => {
      return [
        {
          date: "14 April 2022",
          name: "Marchotridyo",
          disease: "HIV",
          similarity: "30%",
          result: "False",
        },
        {
          date: "14 April 2022",
          name: "Marchotridyo",
          disease: "Down Syndrome",
          similarity: "20%",
          result: "False",
        },
        {
          date: "14 April 2022",
          name: "Marchotridyo",
          disease: "AIDS",
          similarity: "15%",
          result: "False",
        },
        {
          date: "14 April 2022",
          name: "Marchotridyo",
          disease: "Syphillis",
          similarity: "5%",
          result: "False",
        },
      ];
    })
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
            placeholder="Date Disease / Disease / Date"
          />
          <button className={styles.searchButton}>Search</button>
        </form>
        <div className={styles.resultsContainer}>
          <div className={styles.subheading}>
            Search results will be shown below.
          </div>
          {dummyResults.length == 0 && (
            <p className={styles.testInfo}>You haven't done a search yet!</p>
          )}
          {dummyResults.length > 0 && (
            <div className={styles.results}>
              <p className={styles.resultsInfo}>
                Found {`${dummyResults.length}`} results!
              </p>
              <div className={styles.resultsFlexbox}>
                {dummyResults.map((result, idx) => {
                  return (
                    <div className={styles.resultCard}>
                      <h3 className={styles.resultHeading}>
                        Test result #{idx + 1}
                      </h3>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Date</p>
                        <p className={styles.resultInfo}>{result.date}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Patient</p>
                        <p className={styles.resultInfo}>{result.name}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Disease</p>
                        <p className={styles.resultInfo}>{result.disease}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Similarity</p>
                        <p className={styles.resultInfo}>{result.similarity}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Result</p>
                        <p className={styles.resultInfo}>{result.result}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTest;
