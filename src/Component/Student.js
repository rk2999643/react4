import React from "react";
import Nav from './Nav'
import { Link } from 'react-router-dom'



function Student(){
    return(
        <>
         <Nav/>
           <h1>Students Detail</h1>
           <button className="add">Add new student</button>
           <table border={1}  className="table">
              <thead  className="th">
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>COURSE</th>
                    <th>BATCH</th>
                    <th>CHANGE</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                    <td >John1</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John2</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John3</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John4</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John5</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John6</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>John7</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>Oct</td>
                    <td><Link>Edit</Link></td>
                </tr>
              </tbody>
           </table>
        </>
    )
}
export default Student;