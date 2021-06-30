import React from "react";
import WebcamCapture from "./Components/WebcamCaputer/WebcamCapture";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Title>AI Creepers</Title>
      <WebcamCapture />
    </div>
  );
}

const Title = styled.h1`
  color: #1e1e24;
  text-align: center;
  font-weight: 700;
`;

export default App;
