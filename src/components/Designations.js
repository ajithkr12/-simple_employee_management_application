import React from 'react'
import { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";







const Designations = () => {
    const [content, setContent] = useState("");
    console.log(content);
    const data=[...content]
    console.log(...data);
    useEffect(() => {
      UserService.getAllDesignations()
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
          <th>Name</th>
          <th>Action</th>

        </tr>     
        {Object.values(data).map((value, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{value.name}</td>
              <td>

                <button type="button" className="btn btn-primary px-2 m-1"><i class="fa fa-address-book" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-primary px-2"><i class="fa fa-trash" aria-hidden="true"></i></button>
 
              </td>
          </tr>
          );
        })}
        </table>
    </div>
  );
}

export default Designations;