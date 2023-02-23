import React from "react";

import {StyledCard} from "./styles/Card.styled"

import {Image} from "./styles/Image.styled"
import {Button} from "./styles/Button.styled"

export default function Card({item: {id, title, body, image, href}}){
  return(
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <a href={href} target="_blank" rel="noreferrer" title="wiki-link">
              <Button bg="#267FE8" color="#fff">
                Learn more...
              </Button>
          </a>
        </div>
      
      <Image src={`./images/${image}`} alt={title}/>
  
    </StyledCard>
  )
}