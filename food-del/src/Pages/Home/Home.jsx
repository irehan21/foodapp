import React, { useState } from 'react'
import Header from '../../Components/Header/Header.jsx'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../Components/AppDownload/AppDownload.jsx'
const Home = () => {
const [category, setcatogory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcatogory={setcatogory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
