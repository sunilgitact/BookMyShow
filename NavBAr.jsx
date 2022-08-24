import React from "react";
import BasicExample from "../DropDown";
import { NavLink } from "react-router-dom";
import GoBackBtn from "./GoBackBtn";

function Navbar()
{
    let stylethetext=({isActive})=>{
        return(
            {fontWeight: isActive ? "bold":"normal",
            textDecoration: isActive ? "underline":"none"}
        )
    }
    return(

      <>
        <nav id="Main-Nav">
            
                  <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" id="BookMyShow-logo" alt="" />

                  <input id="Search-inp" placeholder="Search for Movies, Events, Plays, Sports and Actvities" type="text" />

            <BasicExample/>


            <button className="btn" id="Signin-btn"> Sign in</button>

        </nav>








        <nav className="semiNav">
            
           
            <NavLink style={stylethetext} to ="/" className='links'>Home</NavLink><br />
            <NavLink style={stylethetext} to = "/about" className='links'>About</NavLink><br />
            <NavLink style={stylethetext} to ="/Bookmyshow" className='links'>Bookmyshow</NavLink><br />
            <NavLink style={stylethetext} to = "/Movies" className='links'>Movies</NavLink><br />
            <NavLink style={stylethetext} to ="/stream" className='links'>Stream</NavLink><br />
            <NavLink style={stylethetext} to ="/Events" className='links'>Events</NavLink><br />
            <NavLink style={stylethetext} to = "/Play" className='links'>Plays</NavLink><br />
            <NavLink style={stylethetext} to ="/" className='links'>Sports</NavLink><br />
            <NavLink style={stylethetext} to ="/" className='links'>Buzz</NavLink><br />

            <GoBackBtn/>
        </nav>
    

        </>
    )
}
export default Navbar;






// import React from 'react'
// import { NavLink } from 'react-router-dom'
// // import About from './About'
// // import BookMyShow from './BookMyShow'
// // import Home from './Home'

// const NavBAr = () => {



//     let styleText = ({isActive})=>{
//         return(
//             {fontWeight: isActive? "bold" : "normal",
//             textDecoration: isActive? '': "none"}
//         )
//     }
//   return (
//     <>
    

//     <nav>
//       <center>
//         <NavLink to='/' style={{ textDecoration: 'none', fontSize: '10px', color:'white', alignItems:'center'  }}> Home</NavLink>
//         <NavLink to='/About' style={{ textDecoration: 'none', fontSize: '10px', marginLeft:'10px',color:'white' }}>About</NavLink>
//         <NavLink to='/BookMyShow'style={{ textDecoration: 'none', fontSize: '10px', marginLeft:'10px',color:'white' }}>BookMyShow</NavLink>
//         <NavLink to='/Employee'style={{ textDecoration: 'none', fontSize: '10px', marginLeft:'10px',color:'white' }}>Employee</NavLink>
//         </center>
//     </nav>
    
//     </>
//   )
// }

// export default NavBAr