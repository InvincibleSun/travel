import React from "react";

import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Image } from "./styles/Image.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";

export default function Header(){
  return(
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" alt="logo"/>
          <a href="https://dreamsinheels.com/best-day-trips-from-kiev-ukraine-kyiv/" target="_blank" rel="noreferrer" title="wiki-link">
          <Button mobile="none">
            Get started!
          </Button>
        </a>
        </Nav>
        <Flex>

          <div>
              <h1>UKRAINE TRAVEL GUIDE</h1>
              <p>Ukraine is home to the deepest metro station in the world, one of the world’s most visited McDonald’s, and some of Europe’s oldest coffee houses. 
                 There are seven places here that have been recognized by UNESCO, it has tons of ghost towns here and you can also find the famous Tunnel of Love. 
                 Let’s visit the most beautiful landscapes and places in Ukraine together.
              </p>
              
              <a href="https://dreamsinheels.com/category/travel-blog-ukraine-travel-tips/" target="_blank" rel="noreferrer" title="wiki-link">
                <Button bg="#267FE8" color="#fff">
                  Check it out!
                </Button>
              </a>
          </div>

          <Image src="./images/pic-1.jpg" alt="buky-canyon"/>
          
        </Flex>
      </Container>
    </StyledHeader>
  )
}

