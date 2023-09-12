import React from "react";
import Banner from "../components/Banner";
import CategorySlides from "../components/CategorySlides";
import TopCategories from "../components/TopCategories";
import Deals from "../components/Deals";

const Home = () => {
  return (
    <>
      <Banner />
      <TopCategories />
      <CategorySlides />
      <Deals heading="Electronic Items" />
      <Deals heading="Clothing Items" />
      <Deals heading="Computer Items" />
      <Deals heading="Farniture Items" />
    </>
  );
};

export default Home;
