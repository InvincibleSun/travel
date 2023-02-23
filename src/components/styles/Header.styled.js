import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.header} url(./images/bg.png) 50% 130px no-repeat;
  padding: 40px 20px;
  min-height: 100vh;
  h1 {
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  p {
    margin: 0 40px 40px 0;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    p {
      margin: 0 0 30px 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 40px 20px 0px;
    h1 {
      font-size: 1rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 80px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 40px;
    height: 50px;
  }
`;
