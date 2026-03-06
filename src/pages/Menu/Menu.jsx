import styles from "./Menu.module.css";
import { cl } from "../../functions/setStyles";
import Button from "../../components/Button/Button";
import { getScores } from "../../functions/Scores";

export default function Menu() {
  const Scores = getScores();

  return (
    <div className={cl(styles, "main")}>
      <h1 className={cl(styles, "title", "box")}>Get Fat, Bat!</h1>
      <p className={styles.text}>Move: WASD / Arrow keys</p>
      <p className={styles.text}>Echo-locate: Spacebar</p>
      <div className={cl(styles, "menu", "box")}>
        <Button content={"PLAY"} link={"/game"} gs={"boxSecond button"} />

        <h2 className={cl(styles, "scores")}>Previous Scores</h2>
        <ul className={cl(styles, "list", "boxSecond")}>
          {Scores.map((Score, Index) => (
            <li className={styles.listItem} key={Index}>
              <p>Points: {Score.points}</p>
              <p>
                Date: <br /> {Score.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
