import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Break from "./components/Break";
import Focus from "./components/Focus";
import Progress from "./components/Progress";
import StartStopButton from "./components/StartStopButton";

function Pomodoro() {
  const [focusLength, setFocusLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);

  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // clicking changes timer between true and false

  const [mode, setMode] = useState("focus");
  const [isSessionActive, setIsSessionActive] = useState(false);

  useInterval(
    () => {
      if (timeRemaining === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        const timeLength = mode === "focus" ? breakLength : focusLength; // select the correct time length
        setTimeRemaining(timeLength * 60); // set the time remaining to the new length
        setMode((prevMode) => (prevMode === "focus" ? "break" : "focus"));
        return; // return will end the callback function and re-render the component
      }
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 1);
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    // if the session is false, reset timeRemaining to default
    if (!isSessionActive) {
      setIsSessionActive(true);
      setTimeRemaining(focusLength * 60); // should be in seconds
    }
    setIsTimerRunning((prevState) => !prevState);
  }

  // reset everything
  function stopTimer() {
    setIsSessionActive(false);
    setIsTimerRunning(false);
    setMode("focus");
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <Focus
          focusLength={focusLength}
          setFocusLength={setFocusLength}
          isTimerRunning={isTimerRunning}
          isSessionActive={isSessionActive}
        />
        <Break
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          isTimerRunning={isTimerRunning}
          isSessionActive={isSessionActive}
        />
      </div>
      <StartStopButton
        playPause={playPause}
        isTimerRunning={isTimerRunning}
        stopTimer={stopTimer}
        isSessionActive={isSessionActive}
      />
      <Progress
        mode={mode}
        timeRemaining={timeRemaining}
        isSessionActive={isSessionActive}
        isTimerRunning={isTimerRunning}
        focusLength={focusLength}
        breakLength={breakLength}
      />
    </div>
  );
}

export default Pomodoro;
