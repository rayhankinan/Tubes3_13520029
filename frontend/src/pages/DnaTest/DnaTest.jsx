import styles from "./DnaTest.module.css";
import { Link } from "react-router-dom";

const DnaTest = () => {
  return (
    <>
      <div className="root">
        {/* center  */}
        <div>
          <p className="header">DNAobama</p>
          {/* title  */}
          <p>Do a DNA test</p>
          <form action="">
            <input type="text" placeholder="patient name" />
            <input type="text" placeholder="disease name" />
            <button type="submit">Submit</button>
          </form>
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

export default DnaTest;
