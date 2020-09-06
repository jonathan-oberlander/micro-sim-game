import { useSubject } from "../../hooks/useObservable";
import { v$ } from "../../state/timeline";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const v = useSubject(v$);

  return (
    <div onClick={() => v.set(true)} className={styles.footer}>
      {v.get ? "PLAY AGAIN" : "PLAY"}
    </div>
  );
};

//////////////////////// P ////////////////////////

// export const doit = async () => {
//   reducers.reset();
//   go$.next(false);
//   try {
//     const data = await apiCall();
//     reducers.success();
//     apiData$.next(data as IData);
//     go$.next(true);
//   } catch (err) {
//     reducers.error(err);
//     go$.next(false);
//     apiData$.next({} as IData);
//   }
// };
