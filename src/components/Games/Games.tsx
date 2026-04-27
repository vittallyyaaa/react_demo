import styles from "../Games/Games.module.css";
import arrowRight from "../../assets/icons/arrow-right.svg";

// Images
import game1 from "../../assets/img/game-1.avif";
import game2 from "../../assets/img/game-2.avif";
import game3 from "../../assets/img/game-3.avif";
import game4 from "../../assets/img/game-4.avif";
import game5 from "../../assets/img/game-5.avif";
import game6 from "../../assets/img/game-6.avif";

const games = [game1, game2, game3, game4, game5, game6];

function Games() {
  return (
    <section className={styles.games}>
      <h1>CREATE, PLAY, EXPLORE</h1>
      <p className="additional-text">
        Conquer Leaderboards, crush workouts, create with friends
        and more. Get lost in a growing library of VR classics and all-
        new experiences.
      </p>
      <a href="##" className="link-arrow">
        Discover All Titles
        <span>
          <img src={arrowRight} className={styles.arrowRight} />
        </span>
      </a>
      <div className={styles.slider}>
        <div className={`${styles.track} ${styles.left}`}>
          {[...games, ...games].map((game, index) => (
            <img key={index} src={game} className={styles.card} alt="" />
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <div className={`${styles.track} ${styles.right}`}>
          {[...games, ...games].map((game, index) => (
            <img key={index} src={game} className={styles.card} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Games;
