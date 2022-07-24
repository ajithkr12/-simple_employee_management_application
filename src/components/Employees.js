// import React from 'react'

// const Employees = () => {


//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>Employees</h3>
//       </header>
//     </div>
//   );
// };

// export default Employees;

import React from 'react'
import { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const Employees = () => {
    const [content, setContent] = useState("");
    const data=[...content]
    console.log(content);
    useEffect(() => {
      UserService.getAllEmployees()
      .then((response) => {
          setContent(response.data.data.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
          setContent(_content);
          console.log('error vannu');
  
          if (error.response && error.response.status === 401) {
            EventBus.dispatch("logout");
            console.log('logout');
          }
        }
      );
    }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Employee List</h3>
        <button>Add New Record</button>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search.." name="search"/>
      </div>
      
        <table>
        <tr>
          <th>Sl.No</th>
          <th>First Nam</th>
          <th>Second Name</th>
          <th>Join Date</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Designatiom</th>
        </tr>     
        {Object.values(data).map((value, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.join_date}</td>
              <td>{value.date_of_birth}</td>
              <td>{value.gender}</td>
              <td>{value.designation_id}</td>
          </tr>
          );
        })}
        </table>
    </div>
  );
}

export default Employees;