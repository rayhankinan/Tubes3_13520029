import ReactLoading from 'react-loading';
import styles from "./Loading.module.css";

const Loading = () => {
  return <div className={styles.root}>
    <ReactLoading type={"bars"} height={'128px'} width={'128px'} className={styles.loading}/>
  </div>
}

export default Loading;