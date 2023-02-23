import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Home.css"



const Home = () => {
    const location = useLocation();



    return (
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the Home Page</h1>
            <button>
        <Link to="/">Login Page</Link>
        </button>
        <button>
        <Link to="/signup">Signup Page</Link>
        </button>
        </div>
    )
}

export default Home;