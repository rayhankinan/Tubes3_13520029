import "react-toastify/dist/ReactToastify.css";

import styles from "./SearchTest.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { formatDate, formatSimilarty, inputMatching } from "../../lib";
import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading";

const SearchTest = () => {
  const searchRef = useRef(null);
  const [dummyResults, setDummyResults] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const URL = "https://dna-pattern-matching.herokuapp.com/api/predictions/";

  useEffect(() => {}, [dummyResults]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Catatan: akses text yang ada di input search di variabel searchValue! */
    const searchValue = searchRef.current.value;
    const queryParams = inputMatching(searchValue);
    if (queryParams == -1) {
      setIsSubmitted(false);
      toast.error("Please input a valid search query.");
      return;
    }
    axios({
      method: "get",
      url: URL,
      params: queryParams,
    })
      .then((res) => {
        setIsLoading(false);
        setDummyResults([...res.data]);
        toast.success("Search done!");
        setIsSubmitted(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error("Oops, an internal server error occured!");
        setIsSubmitted(false);
      });
  };

  return (
    <div className={styles.root}>
      {isLoading && <Loading />}
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
          <h1 className={styles.heading}>Search for past tests</h1>
          <h2 className={styles.subheading}>
            See a list of past tests by entering a date or a genetic disease.
            You can also search for a combination of them.
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
          {!isSubmitted && (
            <p className={styles.testInfo}>
              You haven't done a successful search yet!
            </p>
          )}
          {isSubmitted && dummyResults.length == 0 && (
            <p className={styles.testInfo}>
              No past tests found based on your query!
            </p>
          )}
          {isSubmitted && dummyResults.length > 0 && (
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
                        <p className={styles.resultInfoR}>
                          {formatDate(result.PredictionDate)}
                        </p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Patient</p>
                        <p className={styles.resultInfoR}>{result.User}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Disease</p>
                        <p className={styles.resultInfoR}>{result.Disease}</p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Similarity</p>
                        <p className={styles.resultInfoR}>
                          {formatSimilarty(result.Similarity)}
                        </p>
                      </div>
                      <div className={styles.resultFlex}>
                        <p className={styles.resultInfoL}>Result</p>
                        <p className={styles.resultInfoR}>
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
