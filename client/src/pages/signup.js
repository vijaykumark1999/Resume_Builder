import './signup.css';
import Login from './login';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";

function Signup() {
    const [uname, setName] = useState("");
    const [password, setPassword] = useState("");

    const login1 = () => {
        Axios.post('http://localhost:3001/api1/', { uname: uname, password: password }).then((response) => {
            console.log(response)
            console.log(response.data);
            if (response.data.code === "ER_DUP_ENTRY") {
                alert("user exist")
            }
            else {
                alert(response.data);
            }

        });
    };

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

            <div className="container">
                <div className="centered">
                    <label className="us">USER NAME</label><br />
                    <input type="text" className="myInput" placeholder="USER NAME" onChange={(event) => {
                        setName(event.target.value)
                    }} /><br />
                    <label className="pa">PASSWORD</label><br />
                    <input className="myInput" type="password" placeholder="PASSWORD" onChange={(event) => {
                        setPassword(event.target.value)
                    }} /><br />
                    <div>
                    </div>
                    <div className="after"></div>
                    <button className="submit" id="submit" type="submit" onClick={login1} >SUBMIT </button><br />
                    <p>alredy have an account</p>
                    <Link to="/login"><button className="clear" id="clear" type="clear" >Login</button></Link>
                </div>
            </div>


        </>
    );
}

export default Signup;
