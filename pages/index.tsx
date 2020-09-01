import React from "react";
import { apiCall } from "../api/mockApi";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { IData, IGame } from "../api/gameData";
import { useObservable } from "../hooks/useObservable";
import { gameData$ } from "../state/gameState";
import { go$, apiData$, flow$, state$, reducers } from "../state/state";

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

//////////////////////// FRONT END ////////////////////////

function HomePage() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default HomePage;
