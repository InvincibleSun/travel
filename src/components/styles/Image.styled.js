import styled from "styled-components";

export const Image = styled.img`
  width: 45%;
  border: 2px solid #80b7b3;
  /* margin: 20px 0 20px 40px; */
  border-radius: 10px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin: 30px 0 20px;
  }
`;
