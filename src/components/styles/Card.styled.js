import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 50px;
  flex-direction: ${({ layout }) => layout || "row"};
  div {
    margin: 30px;
    text-align: justify;
    h2 {
      text-transform: uppercase;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    font-size: 1rem;
    padding: 30px;
    text-align: center;
    div {
      margin-bottom: 0px;
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 20px 0;
    padding: 0px 20px;
    h2 {
      font-size: 1rem;
    }
  }
`;
