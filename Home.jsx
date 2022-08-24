import React from "react";
import UncontrolledExample from "./Adds";
import ApiData from "./ApiData";
import BestEnterin from "./BestEnterin";
import Events from "./Events";
import Footer from "./Footer";
import RecommandedMovies from "./RecommandedMovies";
import Streaming from "./Streaming";

export default function Home() {
  // let navigate=useNavigate()
  return (
    
    <>
      <section>
        <UncontrolledExample/>
        <Events/>
        <RecommandedMovies/>
        <BestEnterin/>
        <Footer/>
        <Events/>
        <Streaming/>
        <Events/>
        <Streaming/>
        <Events/>
        <BestEnterin/>
        <Footer/>
      </section>
    </>
  )
}