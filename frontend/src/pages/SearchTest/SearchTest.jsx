import styles from "./SearchTest.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { formatDate, formatSimilarty, inputMatching } from "../../lib";
import axios from "axios";
import { useEffect } from "react";

const SearchTest = () => {
  const searchRef = useRef(null);
  const [dummyResults, setDummyResults] = useState([]);
  const URL = "http://localhost:3000/api/predictions/";

  useEffect(() => {
    console.log(dummyResults);
  }, [dummyResults]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Catatan: akses text yang ada di input search di variabel searchValue! */
    const searchValue = searchRef.current.value;
    const queryParams = inputMatching(searchValue);
    console.log(queryParams);
    if (queryParams == -1) {
      window.alert(`Harap masukkan input yang benar!`);
      return;
    }

    axios({
      method: "get",
      url: URL,
      params: queryParams,
    })
      .then((res) => {
        console.log(res.data);
        setDummyResults([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.diseaseInput}
            placeholder="Date Disease / Disease / Date"
            ref={searchRef}
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
                        <p className={styles.resultInfoL}>
                          {formatDate(result.PredictionDate)}
                        </p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Patient</p>
                        <p className={styles.resultInfoL}>{result.User}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Disease</p>
                        <p className={styles.resultInfoL}>{result.Disease}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Similarity</p>
                        <p className={styles.resultInfoL}>
                          {formatSimilarty(result.Similarity)}
                        </p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Result</p>
                        <p className={styles.resultInfoL}>
                          {result.PredictionStatus === true ? "True" : "False"}
                        </p>
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
