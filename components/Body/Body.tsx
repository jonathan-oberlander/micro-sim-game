import React from "react";
import { useObservable } from "../../hooks/useObservable";
import { apiData$, state$ } from "../../state/state";
import { Item } from "../Item/Item";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import styles from "./Body.module.css";

export const Body: React.FC = () => {
  const apiData = useObservable(apiData$);
  const state = useObservable(state$);

  return (
    <div className={styles.body}>
      <Loader display={state?.loading} />
      <Error display={state?.error ? true : false}>{state?.error}</Error>
      {!state?.loading &&
        apiData?.data?.map((g, i) => <Item key={`item_${i}`} g={g} />)}
    </div>
  );
};
