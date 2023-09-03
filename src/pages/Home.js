import React from 'react'
import Banner from '../components/Banner'
import CategorySlides from '../components/CategorySlides'
import TopCategories from '../components/TopCategories'
import Deals from '../components/Deals'

const Home = () => {
  return (
    <>
        <Banner/>
        <Deals/>
        <TopCategories/>
        <CategorySlides/>
    </>
  )
}

export default Home