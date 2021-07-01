import React from "react";
import { Body, Heading, Wrapper, StartButton } from "./Content.style";
import { PauseCircleFilled, PlayCircleFilled } from "@material-ui/icons";

interface Props {
  setStart: (arg0: boolean) => void;
  start: boolean;
}

function Content({ setStart, start }: Props): JSX.Element {
  return (
    <Wrapper>
      <Heading>We know your worries.</Heading>
      <Body>
        That's why we recreated the most marvellous creation of our time. Click
        the pic of your fruit and let us do the job.
      </Body>

      <StartButton onClick={() => setStart(!start)}>
        {start ? (
          <>
            Stop
            <PauseCircleFilled className={"icon"} />
          </>
        ) : (
          <>
            Boot In
            <PlayCircleFilled className={"icon"} />
          </>
        )}
      </StartButton>
    </Wrapper>
  );
}

export default Content;
