import { Container } from "./styles/Container.styled";

import { StyledFooter } from "./styles/Footer.styled"

export default function Footer(){
  return(
    <Container>
    
        <StyledFooter>
          <div>
              <a
                href="https://github.com/InvincibleSun"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                ><i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yulia-vitiunina/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                ><i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100018933257496"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Profile"
                ><i class="fa-brands fa-facebook"></i>
              </a>
          </div>
          <p>
            This project was coded by Yulia Vitiunina, it is  <a href="https://github.com/InvincibleSun/travel-guide"
              title="Link to GitHub"
              target="_blank"
              rel="noopener noreferrer"
              >
                 open-sourced
            </a>
          </p>
          
        </StyledFooter>
      
    </Container>
  )
}