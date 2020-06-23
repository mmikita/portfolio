import React from "react"
import Plane from './../images/plane.png';


const Form = ({ description }) => {

    return <div id="#contactFormWrapper" className="formSection">
        <h2>Contact me</h2>
        <div className="formWrapper">

            <form className="contactForm" method="post" action="#">
                <div className="field">
                    <div>
                        <label htmlFor="name">Name</label></div>
                    <div><input type="text" name="name" id="name" /></div>
                </div>
                <div className="field">
                    <div>   <label htmlFor="email">Email</label> </div>
                    <div>    <input type="text" name="email" id="email" /> </div></div>

                    <div className="field">
                    <div>   <label htmlFor="subject">Subject</label> </div>
                    <div>    <input type="text" name="subject" id="subject" /> </div></div>  

                <div className="field">
                    <div>
                        <label htmlFor="message">Message</label></div>
                    <div><textarea name="message" id="message" rows="6" /> </div>
                </div>
                <div className="submitButtonWrapper">

                    <button type="submit" id="submitForm">
                        <img src={Plane} />
                    </button>

                </div>
            </form>


        </div>
    </div>
}



export default Form
