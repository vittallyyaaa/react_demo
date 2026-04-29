import { useState } from "react";

import styles from "./WhatsIncluded.module.css";
import WhatsIncludedImg from "../../assets/img/whats-included.avif";


const points = [
  {
    id: 1,
    className: "p1",
    title: "VR Facial Interface",
    text: "Comfortable facial interface for Oculus Quest 2.",
  },
  {
    id: 2,
    className: "p2",
    title: "Touch Controllers",
    text: "Two controllers for intuitive VR interaction.",
  },
  {
    id: 3,
    className: "p3",
    title: "Oculus Headset",
    text: "Main VR headset with immersive visuals.",
  },
  {
    id: 4,
    className: "p4",
    title: "Charging Cable",
    text: "Cable for charging and connecting your device.",
  },
  {
    id: 5,
    className: "p5",
    title: "Power Adapter",
    text: "Power adapter included in the box.",
  },
];

function WhatsIncluded() {
  const [activePoint, setActivePoint] = useState<null | (typeof points)[number]>(null);

  return (
    <section className={`section-surface ${styles.WhatsIncluded}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>What’s included</h1>

        <div className={styles.imageWrapper}>
          <img src={WhatsIncludedImg} className={styles.image} alt="All device" />

          {points.map((point) => (
            <button
              key={point.id}
              className={`${styles.point} ${styles[point.className]}`}
              type="button"
              onClick={() => setActivePoint(point)}
            >
              <PointIcon />
            </button>
          ))}
        </div>
        <button className='button-main'>BUY NOW</button>
      </div>

      {activePoint && (
        <div className={styles.modalOverlay} onClick={() => setActivePoint(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.close}
              type="button"
              onClick={() => setActivePoint(null)}
            >
              ×
            </button>

            <h3>{activePoint.title}</h3>
            <p>{activePoint.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function PointIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.pointSvg}
    >
      <circle cx="18" cy="18" r="17" stroke="currentColor" stroke-width="2" />
      <circle cx="18" cy="18.0001" r="8.38095" fill="currentColor" />
    </svg>
  );
}

export default WhatsIncluded;
