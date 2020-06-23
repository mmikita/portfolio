import React from "react"
import light from './../images/light.jpg';

const Baner = () => {
    return <div className="bannerWrapper">
        <img src={light}></img>
        <div id="#baner" className="bannerText">
        <p>Hey! I’m Michał, Web Developer</p>    
            
        </div>
    </div>
}

export default Baner
