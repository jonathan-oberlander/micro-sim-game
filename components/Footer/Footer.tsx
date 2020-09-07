import { useSubject } from "../../hooks/useObservable";
import { playGame$ } from "../../store/applicationState";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const play = useSubject(playGame$);

  return (
    <div onClick={() => play.set(true)} className={styles.footer}>
      {play.get ? "PLAY AGAIN" : "PLAY"}
    </div>
  );
};
