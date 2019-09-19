import React from "react"
import Container from "react-bootstrap/Container"
import contentStyles from "./content.module.css"

export default () =>
  <Container className={contentStyles.contentContainer}>
    <h1>
      Hello world <br />
      My name is Hendro <br />
      I am a Software Developer
    </h1>
    <p>Love all things of tech, constantly learning new stuff</p>
  </Container>
