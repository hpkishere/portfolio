import React from "react"
import Container from "react-bootstrap/Container"
import { FaChevronLeft } from "react-icons/fa"
import skillsStyles from "./skills.module.css"
import { Link } from "gatsby"

export default () =>
  <Container className={skillsStyles.contentContainer}>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
      <FaChevronLeft className={skillsStyles.leftLogo} />
    </Link>
    <h1>
      Javascript <br />
      Java <br />
      Python <br />
      C# <br />
      SQL
    </h1>
  </Container>
