import React from "react";
import { useObservable } from "../../hooks/useObservable";
import { globalState1$ } from "../../store/applicationState";
import { flow$ } from "../../store/timelineFlow";
import { ProgressBar } from "../ProgessBar/ProgressBar";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const timer = useObservable(flow$);
  const state = useObservable(globalState1$);

  return (
    <>
      <div className={styles.counter}>{!state?.loading && timer?.display}</div>
      <ProgressBar t={timer?.clock as number} />
    </>
  );
};
