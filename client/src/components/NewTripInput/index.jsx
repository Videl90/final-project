import React from "react";
import "./styles.css";
import DayPickerDeparture from "../DayPickerDeparture";
import DayPickerReturn from "../DayPickerReturn";

import DayPicker from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function NewTripInput(props) {
  return (
    <form className="form newtrip-container">
      <p className="newtrip-form-title">PLAN YOUR NEXT TRIP!</p>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <input type="text" name="location" className="newtrip-form-control form-control" placeholder="Location" {...props}/>
            </div>
            <div className="col-lg-6 col-sm-12">
            <div className="input-group mb-3">
                <select className="custom-select newtrip-form-control" name="category"  id="inputGroupSelect01" {...props}>
                <option value="" disabled selected hidden>Category</option>
                <option>Business</option>
                <option>Vacation</option>
                </select>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="row">
                    <div className="col-4">

                        <div className="input-group mb-3">
                        <select className="custom-select newtrip-form-control" name="numberOfPeople" id="inputGroupSelect01" {...props}>
                            <option value="" disabled selected hidden>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                    </div>    
                    <div className="col-4">

                    <div className="finput-group mb-3">
                        {/* <select className="custom-select newtrip-form-control" name="departure" id="inputGroupSelect01" {...props}>
                            <option>Departure Date</option>
                        </select> */}
                        <DayPickerDeparture className="custom-select newtrip-form-control" name="arrival" id="inputGroupSelect01"/>
                    </div>

                    </div>    
                    <div className="col-4">
                      <div className="input-group mb-3">

                    {/* <select className="custom-select newtrip-form-control" name="arrival" id="inputGroupSelect01" {...props}>
                        <option>Arrival Date</option>
                    </select> */}
                        <DayPickerReturn className="custom-select newtrip-form-control" name="arrival" id="inputGroupSelect01"/>
                      </div>
                    </div>  
                </div>
            </div>     

            <div className="col-lg-6 col-sm-12">
                <div className="row">   

                    <div className="col-12">
                        <input type="text" className="newtrip-form-control form-control" name="tripname" placeholder="Name your trip" {...props}/>
                    </div>     
                </div>
            </div>
        </div>
        <button className="btn btn-primary" onClick={props.getFlights}>Search</button>
    </form>
  );
}

export default NewTripInput;
