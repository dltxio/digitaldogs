import React from "react";
import {
  PageLayout,
  Cover,
  Search,
  Count,
  Register,
  Sponsors
} from "../components/";
import About from "../components/About/About_View";
import "../readers/index";

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
