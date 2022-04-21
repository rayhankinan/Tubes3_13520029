import styles from "./SearchTest.module.css";

const SearchTest = () => {
  return (
    <>
      <div style="root">
        <div className="center">
          <p className="heading">DNAobama</p>
          <p className="title">Search for past tests</p>
          <p>
            see a lislt of past test by entering a date of a genetic disease.
            You can also search for a combination of them
          </p>
          <input type="text" placeholder=" Date Disease / Disease / date " />
          <p>Search results will be shown below</p>
          <p>found 4 results</p>
          {/* card  */}
          <div>
            <p>test results</p>
            <p>{`Date\t\t: 14 April 2022`}</p>
            <p>{`Patient\t\t: Marchotridyo`}</p>
            <p>{`Disease\t\t: HIV`}</p>
            <p>{`Similarity\t\t: 30%`}</p>
            <p>{`Result\t\t: False`}</p>
          </div>
          {/* end of card  */}
          {/* card  */}
          <div>
            <p>test results</p>
            <p>{`Date\t\t: 14 April 2022`}</p>
            <p>{`Patient\t\t: Marchotridyo`}</p>
            <p>{`Disease\t\t: HIV`}</p>
            <p>{`Similarity\t\t: 30%`}</p>
            <p>{`Result\t\t: False`}</p>
          </div>
          {/* end of card  */}
          {/* card  */}
          <div>
            <p>test results</p>
            <p>{`Date\t\t: 14 April 2022`}</p>
            <p>{`Patient\t\t: Marchotridyo`}</p>
            <p>{`Disease\t\t: HIV`}</p>
            <p>{`Similarity\t\t: 30%`}</p>
            <p>{`Result\t\t: False`}</p>
          </div>
          {/* end of card  */}
        </div>
      </div>
    </>
  );
};

export default SearchTest;
