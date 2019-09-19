import React from "react"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

import Background from "../components/Background"
import NavBar from "../components/NavBar"
import Content from  "../components/Content"
import Footer from "../components/Footer"

export default () => 
  <Background>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hendro | Portfolio</title>
    </Helmet>
    <NavBar />
    <Content />
    <Footer />
  </Background>
