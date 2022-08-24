import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./Routing/About"
import Home from "./Routing/Home"
import Imax from "./Routing/Imax"
import Navbar from "./Routing/NavBAr"
import PageNotFound from "./Routing/PageNotFound"
import BookmyShow from "./Routing/BookMyShow"
import Streaming from "./Routing/Streaming"
import Events from "./Routing/Events"
import Movies from "./Routing/Movies"
import Play from "./Routing/Play"


function App()
  {
    return( 
        <>        
        <BrowserRouter>       
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="BookmyShow" element={<BookmyShow/>}> 
                <Route path="Events" element={<Events/>}/>
                <Route path="Imax" element={<Imax/>}/>
            </Route>
            <Route path="Stream" element={<Streaming/>}/>
            <Route path="Movies" element={<Movies/>}/>
            <Route path="/" element={<Play/>}/>
            <Route path="Events" element={<Events/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
        </>
    )
  }
  export default App