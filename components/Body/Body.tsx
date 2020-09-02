import React from "react";
import { useObservable } from "../../hooks/useObservable";
import { apiData$, state$ } from "../../state/state";
import { Item } from "../Item/Item";
import { ConditionalLoader } from "../Loader/Loader";
import { ConditionalError } from "../Error/Error";
import styles from "./Body.module.css";

export const Body: React.FC = () => {
  const apiData = useObservable(apiData$);
  const state = useObservable(state$);

  return (
    <div className={styles.body}>
      <ConditionalLoader display={state?.loading} />
      <ConditionalError display={state?.error ? true : false} cool={true}>
        {state?.error}
      </ConditionalError>
      {!state?.loading &&
        apiData?.data?.map((g, i) => <Item key={`item_${i}`} g={g} />)}
    </div>
  );
};
