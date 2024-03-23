import React from 'react'
import "../components/home.css"

const Home = () => {
    return (
        <div>
            <div className="bookingSection">
                <div className="bookingTitle">
                    <div className="bookTitle">
                        <h1> New Booking Order</h1>
                        <div className="line2"></div>
                    </div>
                </div>
                <div className="bookingTable">
                    <table>
                        <tr>
                            <th>Customer Name</th>
                            <th>Number</th>
                            <th>Car Name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Bharat Chaudhary</td>
                            <td>8469013600</td>
                            <td>BMW</td>
                            <td class="actionBtns">
                                <a href="#">View</a>
                                <a href="#">Confirm</a>
                                <a href="#">Cancel</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
