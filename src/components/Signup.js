import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Signup.css"


const Signup = () => { 

    const history = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


async function submit(e) {
    e.preventDefault();

    try {
    await axios.post("http://localhost:3000/signup", {
        email: email,
        password: password,
    })
    .then(res => {
        if(res.data === "exist"){
            alert("User already exist")

        }
        else if(res.data === "not exist"){
        history("/home", {state: {id: email}})



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
    <div className="signup">
        <h1>Signup</h1>

        <form action="POST">
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" />
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />

        <input type="submit" onClick={submit}/>

        </form>
        
        <br />
        <p>OR</p>
        <br />
        <button>
        <Link to="/">Login Page</Link>
        </button>
    </div>

)}


export default Signup;