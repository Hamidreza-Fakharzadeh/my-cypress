
import './App.css';
import {useState} from "react";

function App() {

  const [inputData, setInputData] = useState({
    email: "",
    address: "",
    city: "",
    state: "",
    checked: false
  })
  console.log(inputData)

  function inputHandler (e) {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value
    })
    
  }

  return (
    <div className="container">
      <form className="mt-5">
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="email" onChange={inputHandler} placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="address" onChange={inputHandler} placeholder="1234 Main St"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control"     onChange={inputHandler} id="city"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="state" className="form-control" onChange={inputHandler}>
        <option>Choose...</option>
        <option value={"London"}>London</option>
        <option value={"Manchester"}>Mancherster</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" onChange={(e)=>setInputData({...inputData, checked: e.target.checked})} id="checked"/>
      <label className="form-check-label" htmlFor="gridCheck">
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
