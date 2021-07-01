import styled from "styled-components";

export const Wrapper = styled.div`
  color: #1e1e24;
  padding: 80px;

  @media only screen and (max-width: 500px) {
    padding: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;

export const Body = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: gray;
  margin: 20px 0;
  max-width: 500px;
`;

export const StartButton = styled.button`
  outline-width: 0;
  border: none;
  cursor: pointer;
  width: fit-content;
  border-radius: 500px;
  font-weight: 500;
  padding: 10px 30px;
  background-color: #ffcf99;
  color: #1e1e24;
  box-shadow: 0 0 16px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  :hover {
    box-shadow: 0 0 16px rgb(0 0 0 / 50%);
  }

  .icon {
    margin-left: 10px;
  }
`;
