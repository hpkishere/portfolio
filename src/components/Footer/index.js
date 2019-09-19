import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import footerStyles from "./footer.module.css"

export default () =>
  <div id={footerStyles.footerContainer}>
    <a href="https://github.com/hpkishere" target={'_blank'}>
      <FaGithub className={footerStyles.icon} />  
    </a>
    <a href="https://www.linkedin.com/in/hendro-pick-kang/" target={'_blank'}>
      <FaLinkedin className={footerStyles.icon} />
    </a>
    
  </div>
