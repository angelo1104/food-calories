import React from "react";
import { Title, Wrapper } from "./Header.style";
import creepr from "../../images/creeper.jpeg";

function Header() {
  return (
    <Wrapper>
      <Title>AI creepers</Title>
      <img src={creepr} alt="logo" />
    </Wrapper>
  );
}

export default Header;
