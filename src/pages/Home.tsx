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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Register />
      <Count />
      </div>
      <About />
      <Sponsors />
    </PageLayout>
  );
};

export default Home;
