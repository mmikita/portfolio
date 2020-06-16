import React from "react"
//import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "./constants/links"
const Navbar = () => {
    return <div>
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <button type="button" className="toggle-btn">
                    </button>
                    <div  className="toggle-btn"><FaAlignRight></FaAlignRight></div>
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    </div>
}

export default Navbar
