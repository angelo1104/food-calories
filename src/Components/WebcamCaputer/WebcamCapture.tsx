import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import {
  Container,
  ClearIcon,
  ReplayIcon,
  SendIcon,
  ClearButton,
  CaloriesButton,
  RadioButton,
  PreviewScreen,
  dimensions,
  Placeholder,
} from "./WebcamCapture.style";
import { StartButton } from "../Content/Content.style";
import Webcam from "react-webcam";
import FormData from "form-data";
import axios from "axios";
import { ArrowForwardIos } from "@material-ui/icons";
import searchFruit from "../../utils/searchFruit";
import { Fruit } from "../../model/calories";
import getMessage from "../../utils/message";

interface Props {
  start: boolean;
}

const dataURLtoFile = (dataurl: string, filename: string): File => {
  const arr = dataurl.split(",");
  // @ts-ignore
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n) {
    u8arr[n - 1] = bstr.charCodeAt(n - 1);
    n -= 1; // to make eslint happy
  }
  return new File([u8arr], filename, { type: mime });
};

function WebcamCapture({ start }: Props): JSX.Element {
  const videoConstraints = {
    width: dimensions.width,
    height: dimensions.height,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const [image, setImage] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fruit, setFruit] = useState<string | null>(null);
  const [fruitInfo, setFruitInfo] = useState<Fruit | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      // @ts-ignore
      const imageSrc = webcamRef?.current?.getScreenshot();
      setImage(imageSrc);
    }
  }, [webcamRef]);

  const clearImage = () => {
    setImage(null);
  };

  useEffect(() => {
    if (!fruit) return;

    const results = searchFruit(fruit)[0].item;
    setFruitInfo(results);
  }, [fruit]);

  const upload = async () => {
    if (!image) return;
    const file = dataURLtoFile(image, "blurha");
    const data = new FormData();
    data.append("file", file, file.name);
    const { data: axiosData } = await axios.post(
      process.env.REACT_APP_API_URL || "",
      data
    );
    setFruit(axiosData?.fruit);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    clearImage();
  };

  return (
    <Container>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{fruit}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {fruitInfo?.Serving} has {fruitInfo?.Calories} calories.{" "}
            {getMessage(fruitInfo?.Calories || 6)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StartButton style={{ margin: 20 }} onClick={handleDialogClose}>
            Okay <ArrowForwardIos className={"icon"} fontSize={"small"} />
          </StartButton>
        </DialogActions>
      </Dialog>

      <Placeholder>
        <img
          src="https://lh3.googleusercontent.com/proxy/Xkt8IYq5EVLhT-rmeLu86gyGN-PGzlHQIhjuPDR-Oz-KwglXZ4hrbpYcntx7lmiW0fM-Ke9wnrkIzZh2HLyp-6ux7APQGIk"
          alt=""
          style={{ width: 100, height: 100 }}
        />
      </Placeholder>

      {image ? (
        // @ts-ignore
        <PreviewScreen background={image}>
          <ClearButton onClick={clearImage}>
            <ClearIcon />
          </ClearButton>

          <IconButton onClick={clearImage}>
            <ReplayIcon />
          </IconButton>
          <CaloriesButton onClick={upload}>
            Get results
            <SendIcon />
          </CaloriesButton>
        </PreviewScreen>
      ) : (
        <>
          {start && (
            <Webcam
              ref={webcamRef}
              audio={false}
              height={videoConstraints.height}
              width={videoConstraints.width}
              videoConstraints={videoConstraints}
              screenshotFormat={"image/jpeg"}
              className={"webcam"}
            />
          )}
          {start && <RadioButton onClick={capture} fontSize={"large"} />}
        </>
      )}
    </Container>
  );
}

export default WebcamCapture;
