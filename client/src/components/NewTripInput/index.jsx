import React from "react";
import "./styles.css";
import DayPickerDeparture from '../DayPickerDeparture';
import DayPickerReturn from '../DayPickerReturn';

function NewTripInput() {
  return (
    <form className="form newtrip-container">
      <p className="newtrip-form-title">PLAN YOUR NEXT TRIP!</p>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <input type="text" className="newtrip-form-control form-control" placeholder="Location"/>
            </div>
            <div className="col-lg-6 col-sm-12">
            <div className="input-group mb-3">
                <select class="custom-select newtrip-form-control" id="inputGroupSelect01">
                <option>Business or Vacation</option>
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
                        <div className="input-group mb-3 persons">
                        <select className="custom-select newtrip-form-control" id="inputGroupSelect01">
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
                    <div className="input-group mb-3">
                      <DayPickerDeparture/>
                    </div>

                    </div>    
                    <div className="col-4">
                    <div className="input-group mb-3">
                      <DayPickerReturn/>
                    </div>

                    </div>  
                </div>
            </div>     

            <div className="col-lg-6 col-sm-12">
                <div className="row">   
                    <div className="col-12 trip-name">
                        <input type="text" className="newtrip-form-control form-control" placeholder="Name your trip"/>
                    </div>     
                </div>
            </div>
        </div>
        <button className="btn btn-primary" type="submit" value="SUBMIT">Search</button>
    </form>
  );
}

export default NewTripInput;
