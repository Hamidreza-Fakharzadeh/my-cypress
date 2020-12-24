
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

  const [inputData, setInputData] = useState({
    email: "",
    address: "",
    city: "",
    state: "",
    checked: false
  })
  console.log(inputData)

  function inputHandler (event) {
    setInputData({
      ...inputData,
      [event.target.id]: event.target.value
    })
    
  }

  function submitHandler(event) {
    event.preventDefault();
    // inputHandler(event)
    event.target.reset();
    axios.post("http://localhost:8080/user", inputData
    
    )
    .then((response) => {
      console.log(response)
    })
    .catch((err) => console.log(err))
      
    
    
  }


  return (
    <div className="container">
      <form className="mt-5" onSubmit={submitHandler}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" name ="email" id="email" onChange={inputHandler} placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input type="text" className="form-control" name="address" id="address" onChange={inputHandler} placeholder="1234 Main St"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="city">City</label>
      <input type="text" className="form-control"     onChange={inputHandler} name="city" id="city"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="state">State</label>
      <select id="state" name="state" className="form-control" onChange={inputHandler}>
        <option>Choose...</option>
        <option value={"London"}>London</option>
        <option value={"Manchester"}>Mancherster</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" onChange={(event)=>setInputData({...inputData, checked: event.target.checked})} name="check" id="checked"/>
      <label className="form-check-label" htmlFor="check">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
    </div>
  );
}

export default App;
