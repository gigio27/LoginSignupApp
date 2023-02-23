import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css"


const Login = () => { 


    const history = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


async function submit(e) {
    e.preventDefault();

    try {
    await axios.post("http://localhost:3000/", {
        email: email,
        password: password,
    })
    .then(res => {
        if(res.data === "exist"){
            history("/home", {state: {id: email}})

        }
        else if(res.data === "not exist"){
            alert("User not found")
        }
    })
    .catch(e=> {
        alert("wrong details")
        console.log(e)
    })


    }

    catch (err) {
        console.log(err);

    }
}

    return (
    <div className="login">
        <h1>Login</h1>

        <form action="POST">
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" />
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />

        <input type="submit" onClick={submit}/>

        </form>
        
        <br />
        <p>OR</p>
        <br />

        <button>
        <Link to="/signup">Signup Page</Link>
        </button>
   
    </div>

)}


export default Login;