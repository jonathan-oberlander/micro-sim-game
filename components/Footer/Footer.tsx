import { doit } from "../../pages";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div onClick={() => doit()} className={styles.footer}>
      PLAY
    </div>
  );
};
