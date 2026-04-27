import styles from "./AdditionalInfo.module.css";
import img1 from "../../assets/img/example1.avif";
import img2 from "../../assets/img/example2.avif";

function AdditionalInfo() {
  return (
    <section className={styles.features}>
      <div className={styles.wrapper}>
        <img src={img1} className={styles.imgTop} />

        <div className={styles.textTop}>
          <h3>3D CINEMATIC SOUND</h3>
          <p className="additional-text">
            Stay focused on the fight
            <br />
            or lost in meditation with
            <br />
            built-in speakers that
            <br />
            deliver cinematic 3D
            <br />
            positional audio.
          </p>
        </div>

        <div className={styles.textBottom}>
          <h3>HEADSET CASTING</h3>
          <p className="additional-text">
            Bring friends into battle or
            <br />
            to the top of an active volcano.
            <br />
            Cast directly on a compatible TV
            <br />
            or on the Oculus app.
          </p>
        </div>

        <img src={img2} className={styles.imgBottom} />
      </div>
    </section>
  );
}

export default AdditionalInfo;
