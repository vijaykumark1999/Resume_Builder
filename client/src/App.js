import { useState } from "react";
import './App.css';

function App() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const displayt = () =>{
    console.log(name+"________"+password)

  };
  const cle =() =>{
    console.clear()
  }
  return (
    <>
    <div className="container">
      <div className="centered">
    <label className="us">USER NAME</label><br/>
    <input type="text" class="myInput" placeholder="USER NAME" onChange={(event) => {
      setName(event.target.value)
    }}/><br/>
    <label className="pa">PASSWORD</label><br/>
      <input  className="myInput" type="password" placeholder="PASSWORD" onChange={(event) => {
      setPassword(event.target.value)
    }}/><br/>
    <div class="after"></div>
    <button className="submit" id="submit" type="submit" onClick={displayt} >SUBMIT </button>
    <button className="clear" id="clear" type="clear" onClick={cle}>CLEAR</button>
    </div>
    </div>
    </>

  );
}

export default App;
