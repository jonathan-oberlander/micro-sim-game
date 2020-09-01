import { IGame } from "../../api/gameData";
import { useObservable } from "../../hooks/useObservable";
import { gameData$ } from "../../state/gameState";
import styles from "./Item.module.css";

export const Item: React.FC<{ g: IGame }> = ({ g }) => {
  const data = useObservable(gameData$(g));
  return (
    <div className={styles.item}>
      <div style={{ marginBottom: "15px" }}>{data?.score}</div>
      <div>{data?.event}</div>
    </div>
  );
};
