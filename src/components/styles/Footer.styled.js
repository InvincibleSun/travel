import styled from "styled-components";

export const StyledFooter = styled.footer`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 30px;
      i {
        color: #267fe8;
        font-size: 2rem;
      }
      &:hover i {
        color: #80b7b3;
        transition: all 300ms ease-in-out;
      }
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    text-align: center;
    a {
      text-decoration: none;
      margin: 0;
      color: #267fe8;
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 0.8rem;
    }
  }
`;
