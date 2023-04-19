import { useState } from "react";
import './login.css';
import Axios from "axios";
import Resumed from './resumedata';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './signup';


function Login() {

    const history = useNavigate();




    const [uname, setName] = useState("");
    const [password, setPassword] = useState("");


    const login1 = () => {
        Axios.post('http://localhost:3001/api/', { uname: uname, password: password }).then((response) => {
            console.log(response)
            const username = response.data[0].username;
            const password1 = response.data[0].password;
            const id = response.data[0].idusers;
            if (uname === username && password === password1) {
                history(`/resumed?id=${id}`);
            } else {
                alert('Invalid username or password');
            }

        });
    };



    const cle = () => {
        console.clear()
    }
    return (
        <>
            <Routes>
                <Route path="/resumed" element={<Resumed />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <div className="container">
                <div className="centered">
                    <br /><br /><br /><br />
                    <label className="us">USER NAME</label><br />
                    <input type="text" className="myInput" placeholder="USER NAME" onChange={(event) => {
                        setName(event.target.value)
                    }} required /><br /><br />
                    <label className="pa">PASSWORD</label><br />
                    <input className="myInput" type="password" placeholder="PASSWORD" onChange={(event) => {
                        setPassword(event.target.value)
                    }} required /><br />
                    <div>
                    </div>
                    <div className="after"></div><br /><br />
                    <button className="submit" id="submit" type="submit" onClick={login1} >SUBMIT </button>
                    <button className="clear" id="clear" type="clear" onClick={cle}>CLEAR</button><br />
                    <p>Don't have account?</p>
                    <Link to="/Signup"><button className="clear" id="clear" type="clear" >Signup</button></Link>
                </div>
            </div>

        </>

    );
}

export default Login;
