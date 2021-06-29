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
} from "./WebcamCapture.style";
import Webcam from "react-webcam";

function WebcamCapture(): JSX.Element {
  const videoConstraints = {
    width: dimensions.width,
    height: dimensions.height,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const [image, setImage] = useState<string | null>(
    "https://cdnb.artstation.com/p/assets/images/images/020/121/847/large/lucas-dos-santos-asset.jpg?1566455066"
  );

  const capture = useCallback(() => {
    if (webcamRef.current) {
      // @ts-ignore
      const imageSrc = webcamRef?.current?.getScreenshot();
      setImage(imageSrc);
    }
  }, [webcamRef]);

  return (
    <Container>
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

      {image && (
        // @ts-ignore
        <PreviewScreen background={image}>
          <ClearButton>
            <ClearIcon />
          </ClearButton>

          <IconButton>
            <ReplayIcon />
          </IconButton>
          <CaloriesButton>
            Get results
            <SendIcon />
          </CaloriesButton>
        </PreviewScreen>
      )}
    </Container>
  );
}

export default WebcamCapture;
