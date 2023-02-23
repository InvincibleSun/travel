import React from "react";

import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

import content from "./content"

import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";


const theme = {
  colors: {
    header: '#b4edf664',
    body: '#fff',
    footer: '#003333',
  },
  tablet: '768px',
  mobile: '479px',
}


function App() {
  return (
   
     <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <Header/>
        <Container>
          {content.map((item, index) => {
             return <Card key={index} item={item}/>
          })}
        </Container>
        <Footer />
     </ThemeProvider>
     
    
    
  );
}

export default App;
