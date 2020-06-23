import React from "react"
import { AiFillLinkedin } from "react-icons/fa"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link,  animateScroll as scroll} from 'react-scroll'


const Footer = () => {
    return <div className="footer">
        <div className="emailContainer">
            <a href="#">m.mikita893@gmail.com</a>
        </div>
        <div>        <ul>
            <li class="linkedin"><a href="https://www.linkedin.com/in/micha%C5%82-mikita-433b69142/" title="linkedin" target="_blank"><LinkedInIcon /></a></li>
            <li class="github"><a href="https://github.com/mmikita" title="github" target="_blank"><GitHubIcon /></a></li>
        </ul>
        </div>
<div className="goToUp"><Link to='top' smooth={true} duration={500} ><ArrowUpwardIcon/></Link></div>


    </div>
}

export default Footer