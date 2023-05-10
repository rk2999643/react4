import React from "react";
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <>
           <div className="main">
           <Link to='/' className="home">Home</Link>
           <Link to='/Student' className="student">Student</Link>
           <Link to='/Contact' className="contact">Contact</Link>
           </div>

        
        </>
    )
}
export default Nav