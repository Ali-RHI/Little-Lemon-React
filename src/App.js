import "./App.css";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import BookingForm from "./BookingForm.js";
import BookingConfirmed from "./BookingConfirmed.js";

function App() {



  const seedRandom = function(seed){
    var m =2**35-31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return(s = s * a % m)/m;
    }
  }


  const  submitAPI = function(formData){
    return true;
  }


  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for(let i = 16; i<23; i++){
      if (random()>0.5){
        result.push(i+":00")
      }else{
        result.push(i+":30")
      }
    }
    return result;
  }

  const initialState = {availableTimes: fetchAPI(new Date())}
  const[times,dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(){
    return{availableTimes: fetchAPI(new Date())}
  }

const navigate = useNavigate()
function submitForm(formData){
  if (submitAPI(formData)){
    navigate("/confirmed")
  }
}

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Main/>}/>
        <Route path="/booking" element={ <BookingForm availableTimes={times} dispatch={dispatch} submitForm={submitForm}/>}/>
        <Route path="/confirmed" element={ <BookingConfirmed availableTimes={times} dispatch={dispatch} submitForm={submitForm}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
