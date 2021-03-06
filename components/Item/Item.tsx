import { IGame } from "../../api/gameData";
import { useObservable } from "../../hooks/useObservable";
import { gameFlow$ } from "../../store/gameFlow";
import styles from "./Item.module.css";

export const Item: React.FC<{ g: IGame }> = ({ g }) => {
  const data = useObservable(gameFlow$(g));
  return (
    <div className={styles.item}>
      <div style={{ marginBottom: "15px" }}>{data?.score}</div>
      <div>{data?.event}</div>
    </div>
  );
};
