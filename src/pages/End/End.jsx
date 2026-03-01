//End.jsx

import { useEffect } from "react";
import Button from "../../components/Button/Button";
import { getScores } from "../../functions/Scores";
import { cl } from "../../functions/setStyles";
import styles from "./End.module.css";
import { playSound } from "../../functions/SoundManager";

export default function End() {
  const Scores = getScores();

  useEffect(() => {
    playSound("rooster");
  }, []);

  return (
    <div className={cl(styles, "main", "setCentre")}>
      <div>YOUR SCORE: {Scores[0].points}</div>
      <Button content={"Return"} link={"/"} />
    </div>
  );
}
