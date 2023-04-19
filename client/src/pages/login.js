import { useState } from "react";
import './login.css';
import Axios from "axios";


function Login() {
    const [post, setPost] = useState({});
    const [uname, setName] = useState("");
    const [password, setPassword] = useState("");
    const login1 = () => {
        Axios.post('http://localhost:3001/api/', { uname: uname, password: password }).then((response) => {
            console.log(response)
            setPost({
                username: response.data[0].username,
                password: response.data[0].password,
            });
        });
    };



    const cle = () => {
        console.clear()
    }
    return (
        <>
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
                    <button className="submit" id="submit" type="submit" onClick={login1} >SUBMIT </button>
                    <button className="clear" id="clear" type="clear" onClick={cle}>CLEAR</button>
                </div>
            </div>

        </>

    );
}

export default Login;
