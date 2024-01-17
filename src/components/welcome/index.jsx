import styles from "./index.module.css";

function Welcome() {
  return (
    <section>
      <h1>Amazing discounts on Garden Products!</h1>
      <button className={styles.checkBtn}>Check out</button>
    </section>
  );
}

export default Welcome;
