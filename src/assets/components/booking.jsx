import React from 'react'
import "../components/booking.css"

const booking = () => {
    return (
        <div>
            <div className="bookingSection">
                <div className="bookingTitle">
                    <div className="bookTitle">
                        <h1> All Booking Order</h1>
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
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default booking
