import React from "react";
import { PageLayout, Cover, Count, Register } from "../components/";
import About from "../components/About/About_View";

const Home = () => {
  return (
    <PageLayout>
      <Cover />
      <Register />
      <Count />
      <About />
    </PageLayout>
  );
};

export default Home;
