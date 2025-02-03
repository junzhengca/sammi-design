import styles from "./Planet.module.css";

export const Planet = () => {
  return (
    <>
      <div className={`${styles.planet} ${styles.planet1}`}></div>
      <div className={`${styles.planet} ${styles.planet2}`}></div>
      <div className={`${styles.planet} ${styles.planet3}`}></div>
      <div className={`${styles.planet} ${styles.planet4}`}>
        <img src="/icons/ticket.png" alt="" />
      </div>
      <div className={`${styles.planet} ${styles.planet5}`}>
        {" "}
        <img src="/icons/wallet.png" alt="" />
      </div>
      <div className={`${styles.planet} ${styles.planet6}`}>
        <img src="/icons/elephant.png" alt="" />
      </div>
    </>
  );
};
