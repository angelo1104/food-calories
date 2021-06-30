import React, { useCallback, useEffect, useRef, useState } from "react";
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
import * as tf from "@tensorflow/tfjs";
import apple from "../../images/apple.jpg";

function loadMobileNet() {
  return tf.loadLayersModel(
    "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json"
  );
}

function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(tf.browser.fromPixels(img));
    img.onerror = (err) => reject(err);
  });
}

function resizeImage(image: any) {
  return tf.image.resizeBilinear(image, [224, 224]);
}

function cropImage(img: any) {
  const width = img.shape[0];
  const height = img.shape[1];
  const shorterSide = Math.min(img.shape[0], img.shape[1]);
  const startingHeight = (height - shorterSide) / 2;
  const startingWidth = (width - shorterSide) / 2;
  const endingHeight = startingHeight + shorterSide;
  const endingWidth = startingWidth + shorterSide;
  return img.slice(
    [startingWidth, startingHeight, 0],
    [endingWidth, endingHeight, 3]
  );
}

function batchImage(image: any) {
  const batchedImage = image.expandDims(0);
  return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
}

function loadAndProcessImage(image: any) {
  const croppedImage = cropImage(image);
  const resizedImage = resizeImage(croppedImage);
  const batchedImage = batchImage(resizedImage);
  return batchedImage;
}

const predictor = async (image: string) => {
  const pretrainedModel = await loadMobileNet();
  const loadedImage = await loadImage(image);
  const processedImage = loadAndProcessImage(loadedImage);
  const prediction = pretrainedModel.predict(processedImage);
  console.log(prediction);
};

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

  useEffect(() => {
    predictor(apple);
  }, []);

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
      )}
    </Container>
  );
}

export default WebcamCapture;
