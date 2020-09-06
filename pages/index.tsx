import React from "react";
import { Body } from "../components/Body/Body";
import { Counter } from "../components/Counter/Counter";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

//////////////////////// FRONT END ////////////////////////

function HomePage() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <Counter />
    </>
  );
}

export default HomePage;
