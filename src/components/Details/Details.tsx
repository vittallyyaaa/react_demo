import styles from "./Details.module.css";

import deviceInside from "../../assets/img/device-inside.avif";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Details() {
  return (
    <section className={`section-surface ${styles.details}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            TAKE A
            <br />
            CLOSER
            <br />
            LOOK
          </h2>

          <a className={`link-arrow ${styles.linkMain}`} href="#">
            Quest 2 Details
            <span>
              <img src={arrowRight} alt="" />
            </span>
          </a>
        </div>

        <img
          className={styles.image}
          src={deviceInside}
          alt="Oculus Quest 2 inside view"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Details;
