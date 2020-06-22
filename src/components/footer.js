import React from "react"
import {AiFillLinkedin} from "react-icons/fa"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    return <div className="footer">


        <ul>
              <li class="linkedin"><a href="https://www.facebook.com/" title="linkedin" target="_blank"><LinkedInIcon /></a></li>
              <li class="github"><a href="https://twitter.com/" title="github" target="_blank"><GitHubIcon /></a></li>

          </ul>

    </div>
}

export default Footer