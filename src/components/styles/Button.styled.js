import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ mobile }) => mobile || "inline-block"};
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0px;
    padding: 15px 50px;
  }
`;
