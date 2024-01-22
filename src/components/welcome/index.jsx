import styles from "./index.module.css";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>
        Amazing discounts <br /> on Garden Products!
      </h1>
      <button className={styles.checkBtn}>Check out</button>
    </section>
  );
}

export default Welcome;
