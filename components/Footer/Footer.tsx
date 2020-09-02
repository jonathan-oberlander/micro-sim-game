import { IData } from "../../api/gameData";
import { apiCall } from "../../api/mockApi";
import { useObservable } from "../../hooks/useObservable";
import { reducers, go$, apiData$, state$ } from "../../state/state";
import styles from "./Footer.module.css";

//////////////////////// P ////////////////////////

export const doit = async () => {
  reducers.reset();
  go$.next(false);
  try {
    const data = await apiCall();
    reducers.success();
    apiData$.next(data as IData);
    go$.next(true);
  } catch (err) {
    reducers.error(err);
    go$.next(false);
    apiData$.next({} as IData);
  }
};

export const Footer: React.FC = () => {
  const go = useObservable(go$);

  return (
    <div onClick={() => doit()} className={styles.footer}>
      {go ? "PLAY AGAIN" : "PLAY"}
    </div>
  );
};
