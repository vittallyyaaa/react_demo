import styles from "./Hero.module.css";
import headset from "../../assets/img/headset.avif";
import controllerLeft from "../../assets/img/controller-left.avif";
import controllerRight from "../../assets/img/controller-right.avif";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleSmall}>OCULUS</span>
          <br />
          QUEST 2
        </h1>

        <p className={styles.price}>FROM $299 USD</p>
        <button className='button-main'>BUY NOW</button>
      </div>

      <div className={styles.images}>
        <img
          src={controllerLeft}
          className={styles.controllerLeft}
          alt="Left controller"
        />

        <img
          src={headset}
          className={styles.headset}
          alt="Oculus Quest 2 headset"
          fetchPriority="high"
        />

        <img
          src={controllerRight}
          className={styles.controllerRight}
          alt="Right controller"
        />
      </div>
    </section>
  );
}
export default Hero;
