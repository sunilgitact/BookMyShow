import React from 'react'
import {Link, Outlet, useNavigate} from "react-router-dom"
import UncontrolledExample from './Adds'

const BookmyShow = () => {
  
  return (
    <>
<UncontrolledExample/> 
    <center>   
     {/* <h2 id='headingms'>Event Happening Near You</h2>     */}
        <nav>
            <Link to="Events" id='EventLink'>Chech here for Events</Link><br /><br />
            <Link to="PVR" id='EventLink'>PVR</Link>
            <Outlet></Outlet>
        </nav>
        </center>
    </>
  )
}

export default BookmyShow;
