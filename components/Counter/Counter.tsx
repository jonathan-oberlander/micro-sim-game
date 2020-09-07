import { useSubject } from "../../hooks/useObservable";
import { counterState$ } from "../../store/applicationState";
import styles from "./Counter.module.css";

export const Counter = () => {
  const count = useSubject(counterState$);
  return (
    <div className={styles.ctn}>
      <button onClick={() => count.set(count.get - 2)}>-</button>
      <h1>{count.get}</h1>
      <button onClick={() => count.set(count.get + 2)}>+</button>
    </div>
  );
};
