import React from "react";
import { secondsToDuration, minutesToDuration } from "../../utils/duration";

function Progress({
  mode,
  timeRemaining,
  isSessionActive,
  isTimerRunning,
  focusLength,
  breakLength,
}) {
  let currentLength = mode === "focus" ? focusLength : breakLength;
  let percentage = (1 - timeRemaining / (currentLength * 60)) * 100; // determine the percentage of time remaining

  if (!isSessionActive) return null;
  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {mode === "focus"
              ? `Focusing for ${minutesToDuration(focusLength)} minutes`
              : `On Break for ${minutesToDuration(breakLength)} minutes`}
            {/* if mode is set to focus, display first text, otherwise display second text */}
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(timeRemaining)} remaining{" "}
            {/* use preloaded function to display time remaining in minutes */}
          </p>
          <h3>{!isTimerRunning && isSessionActive ? "PAUSED" : null}</h3>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={percentage} // Increase aria-valuenow as elapsed time increases
              style={{ width: `${percentage}%` }} // Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
