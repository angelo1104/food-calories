import styled from "styled-components";
import { Clear, RadioButtonUnchecked, Replay, Send } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export const dimensions = {
  height: 400,
  width: 255,
};

export const PreviewScreen = styled.div`
  background: ${(props: any) =>
    props?.background ? `url(${props.background})` : "aquamarine"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  max-height: ${dimensions.height}px;
  max-width: ${dimensions.width}px;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  min-width: ${dimensions.width}px;
  min-height: ${dimensions.height}px;
  padding: 74px;
  justify-content: center;
  border-radius: 5px;
  background: url("https://www.pngkey.com/png/full/859-8598072_picture-freeuse-library-silhouette-mobile-at-getdrwawings-cell.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  .webcam {
    box-shadow: 1px -1px 59px -19px rgba(0, 0, 0, 0.5);
  }
`;

export const RadioButton = styled(RadioButtonUnchecked)`
  position: absolute;
  bottom: 15%;
  font-size: 50px !important;
  cursor: pointer;
  color: white;
`;

export const CaloriesButton = styled.button`
  outline-width: 0;
  border: none;
  cursor: pointer;
  width: fit-content;
  border-radius: 500px;
  padding: 5px 15px;
  background-color: #ffcf99;
  color: black;
  box-shadow: 0 0 16px rgb(0 0 0 / 70%);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    box-shadow: 0 0 16px rgb(0 0 0 / 90%);
  }
`;

export const SendIcon = styled(Send)`
  font-size: 20px !important;
  margin-left: 10px;
`;

export const ReplayIcon = styled(Replay)`
  font-size: 25px !important;
  color: white;
  margin-bottom: 10px;
`;

export const ClearIcon = styled(Clear)`
  font-size: 25px !important;
  color: white;
`;

export const ClearButton = styled(IconButton)`
  position: absolute !important;
  top: 0;
  left: 0;
`;
