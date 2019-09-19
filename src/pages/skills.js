import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Background from "../components/Background"
import NavBar from "../components/NavBar"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default () =>
  <Background>
    <NavBar />
    <Skills />
    <Footer />
  </Background>
