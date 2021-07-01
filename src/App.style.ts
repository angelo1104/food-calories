import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;
