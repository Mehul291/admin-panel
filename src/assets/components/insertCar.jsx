import React from 'react'
// import Navbar from '../src/assets/components/navbar'
import './insertCar.css'

function insertCar() {
    return (
        <div>
            {/* <div className="navInsert">
                <Navbar />
            </div> */}
            <div className="insertSection">
                <div className="insertTitle">
                    <div className="insTitle">
                        <h1> Add New Car</h1>
                        <div className="line"></div>
                    </div>
                </div>
                <form action="">
                    <div className="allCarField">
                        <div className="inputField">
                            <label htmlFor="">Car Name</label>
                            <input type="text" name="" id="" placeholder='Enter Car Name' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Car Model</label>
                            <input type="number" name="" id="" placeholder='Enter Car Name' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Car Type</label>
                            <input type="text" name="" id="" placeholder='Ex. Economy' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Fuel Type</label>
                            <input type="text" name="" id="" placeholder='Ex. Diesel' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Average</label>
                            <input type="number" name="" id="" placeholder='Ex. 4' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Seat</label>
                            <input type="number" name="" id="" placeholder='Enter Car Name' />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">AC Features</label> <br />
                            <select name="" id="">
                                <option value="">Select Value</option>
                                <option value="AC">AC</option>
                                <option value="Non AC">Non AC</option>
                            </select>
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Car Image</label>
                            <input type="file" name="" id="" />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Total Price</label>
                            <input type="number" name="" id="" placeholder='Enter Car Name' />
                        </div>
                    </div>
                    <div className="btn">
                        <input type="button" value="Submit" name=''/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default insertCar
