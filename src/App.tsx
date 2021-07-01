import React, { useState } from "react";
import WebcamCapture from "./Components/WebcamCaputer/WebcamCapture";
import Header from "./Components/Header/Header";
import { ContentWrapper } from "./App.style";
import Content from "./Components/Content/Content";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div>
      <Header />
      <ContentWrapper>
        <WebcamCapture start={start} />
        <Content setStart={setStart} start={start} />
      </ContentWrapper>
    </div>
  );
}

export default App;
