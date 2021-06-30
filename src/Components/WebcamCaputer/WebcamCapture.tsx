import React, { useCallback, useRef, useState } from "react";
import { IconButton } from "@material-ui/core";
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
import Webcam from "react-webcam";

function WebcamCapture(): JSX.Element {
  const videoConstraints = {
    width: dimensions.width,
    height: dimensions.height,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const [image, setImage] = useState<string | null>(null);

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

  return (
    <Container>
      <Placeholder />

      {image ? (
        // @ts-ignore
        <PreviewScreen background={image}>
          <ClearButton onClick={clearImage}>
            <ClearIcon />
          </ClearButton>

          <IconButton onClick={clearImage}>
            <ReplayIcon />
          </IconButton>
          <CaloriesButton>
            Get results
            <SendIcon />
          </CaloriesButton>
        </PreviewScreen>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
            screenshotFormat={"image/jpeg"}
            className={"webcam"}
          />
          <RadioButton onClick={capture} fontSize={"large"} />
        </>
      )}
    </Container>
  );
}

export default WebcamCapture;
