import { useState } from "react";
import React from "react";
import "./BookingForm.css";

export default function BookingForm(props) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [occasion, setOccasion] = useState("")
  const [guests, setGuests] = useState("")
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
    console.log(date, time, occasion, guests);
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    props.submitForm(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <span className="mainspan">
        <span className="contspan">
          <span className="lastspan">
            <label htmlFor="date-inp" >Date</label>
            <input type="date" id="date-inp" onChange={(e)=>{handleChange(e.target.value)}}></input>
          </span>
          <span className="lastspan">
            <label htmlFor="occ-inp">Occasion</label>
            <select id="occ-inp" onChange={(e)=>{setOccasion(e.target.value)}}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </span>
        </span>
        <span className="contspan">
          <span className="lastspan">
            <label htmlFor="time-inp">Time</label>
            <select type="time" id="time-inp"  onChange={(e)=>{setTime(e.target.value)}}>
              <option value="{}">select a time</option>
              {props.availableTimes.availableTimes.map(availableTimes=>{
                return(<option value={availableTimes}>{availableTimes}</option>)
              })}
            </select>
          </span>
          <span className="lastspan">
            <label htmlFor="guests-num-inp">Number of Guests</label>
            <input
              type="range"
              id="guests-num-inp"
              min={1}
              max={10}
              step={1}
              onChange={(e)=>{setGuests(e.target.value)}}
            ></input>
          </span>
        </span>
      </span>
      <span>
        <input type="submit" value="Make your reservation" aria-label="On Click"

/>
      </span>
    </form>
  );
}
