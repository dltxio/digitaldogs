import React from "react";
import { PageLayout, Cover, Search, Count, Register } from "../components/";
import About from "../components/About/About_View";

const Home = () => {
  return (
    <PageLayout>
      <Cover />
      <Search />
      <Register />
      <Count />
      <About />
    </PageLayout>
  );
};

export default Home;
