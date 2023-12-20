import "./BookingForm.css";

export default function Hero() {
  return (
    <form>
      <label>Date</label>
      <input type="date"></input>
      <label>Time</label>
      <input type="time"></input>
      <label>Number of Guests</label>
      <input type="range"></input>
      <label>Occasion</label>
      <input type="radio" min={1} max={10}></input>
      <input type="submit"value="Submit" />
    </form>
  );
}
