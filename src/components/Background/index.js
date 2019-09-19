import React from "react"
import backgroundStyles from "./background.module.css"

export default (props) => 
  <div id={backgroundStyles.backgroundRoot}>
    {props.children}
  </div>
