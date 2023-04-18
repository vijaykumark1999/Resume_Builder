import { useState } from "react";
import './App.css';
import Axios from "axios";


function App() {
  
  const [uname,setName] = useState("");
  const [password,setPassword] = useState("");
  const login1 = () =>{
    Axios.post('http://localhost:3001/login',{ uname: uname, password: password}).then(()=>{
      console.log("done");
    });
  };

  
  const cle =() =>{
    console.clear()
  }
  return (
    <>
    <div className="container">
      <div className="centered">
    <label className="us">USER NAME</label><br/>
    <input type="text" className="myInput" placeholder="USER NAME" onChange={(event) => {
      setName(event.target.value)
    }}/><br/>
    <label className="pa">PASSWORD</label><br/>
      <input  className="myInput" type="password" placeholder="PASSWORD" onChange={(event) => {
      setPassword(event.target.value)
    }}/><br/>
    <div className="after"></div>
    <button className="submit" id="submit" type="submit" onClick={login1} >SUBMIT </button>
    <button className="clear" id="clear" type="clear" onClick={cle}>CLEAR</button>
    </div>
    </div>
    </>

  );
}

export default App;
