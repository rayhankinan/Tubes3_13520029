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
          <p className={styles.logo}>DNAobama</p>
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
                <button className={styles.cardButton}>
                  <Link className={styles.cardLink} to="/add-disorder">
                    Go!
                  </Link>
                </button>
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
                <button className={styles.cardButton}>
                  <Link className={styles.cardLink} to="/dna-test">
                    Go!
                  </Link>
                </button>
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
                <button className={styles.cardButton}>
                  <Link className={styles.cardLink} to="/search">
                    Go!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const Home = () => {
//   return (
//     <div className="root">
//       <div className={styles.containerCenter}>
//         {/* heading  */}
//         <p className="header">DNAObama</p>
//         {/* title  */}
//         <div className={styles.container}>
//           <p className={styles.heading}>
//             {" "}
//             Your go-to <br /> solution for detecting <br /> genetic disorders.{" "}
//           </p>
//           {/* <img src={Home1} className={styles.home1} />
//           <img src={Home2} className={styles.home2} />
//           <img src={Home3} className={styles.home3} /> */}
//         </div>
//         {/* image  */}
//         {/* end of image  */}
//         {/* cards  */}
//         <p className={styles.subtitle}>What do you want to do?</p>
//         <div className={styles.cardContainer}>
//           {/* single card  */}
//           <div className={styles.card}>
//             {/* image  */}
//             {/* text  */}
//             <p className={styles.cardTitle}>Add Genetic disorder</p>
//             <p className={styles.cardDesc}>
//               Add a new genetic disorder to the database alongside it's DNA
//               sequence
//             </p>
//             <button className="btn">
//               <Link to="/add-disorder">Go!</Link>
//             </button>
//           </div>
//           {/* end of single card  */}
//           {/* single card  */}
//           <div className={styles.card} id={styles.two}>
//             {/* image  */}
//             {/* text  */}
//             <p className={styles.cardTitle}>Do a DNA test</p>
//             <p className={styles.cardDesc}>
//               Check if a certain patient has a certain genetic disease.
//             </p>
//             <button className="btn">
//               <Link to="/dna-test">Go!</Link>
//             </button>
//           </div>
//           {/* end of single card  */}
//           {/* single card  */}
//           <div className={styles.card} id={styles.three}>
//             {/* image  */}
//             {/* text  */}
//             <p className={styles.cardTitle}>Search patient</p>
//             <p className={styles.cardDesc}>
//               See a list of past tests by entering a date or a genetic disease.
//               You can also search for a combination of them.
//             </p>
//             <button className="btn">
//               <Link to="/search">Go!</Link>
//             </button>
//           </div>
//           {/* end of single card  */}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
