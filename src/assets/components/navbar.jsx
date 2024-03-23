import React from 'react';
import { MdDashboard } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import "../../App.css";

const App = () => {
  return (
    <div className="main">

      <div className="navbar">
        <div className="logo">
          <h2>CRS</h2>
        </div>
        <div className="navSection">
          <ul>
            <li>
              <i><MdDashboard /></i>
              <a href="App.jsx">Home</a>
            </li>
            <li>
              <i><MdOutlineAdd /></i>
              <a href="insertCar.jsx">Insert Cars</a>
            </li>
            <li>
              <i><MdBorderColor /></i>
              <a href="#">Bookings</a>
            </li>
          </ul>
        </div>
        <div className="logout">
          <a href="">Logout</a>
        </div>
      </div>

    </div>

  );
};

export default App
