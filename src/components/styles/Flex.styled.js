import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;
  }
`;
