import React from "react";
import { useObservable } from "../../hooks/useObservable";
import { state$ } from "../../state/state";
import { flow$ } from "../../state/timeline";
import { ProgressBar } from "../ProgessBar/ProgressBar";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const timer = useObservable(flow$);
  const state = useObservable(state$);

  return (
    <>
      <div className={styles.counter}>{!state?.loading && timer?.display}</div>
      <ProgressBar t={timer?.clock as number} />
    </>
  );
};
