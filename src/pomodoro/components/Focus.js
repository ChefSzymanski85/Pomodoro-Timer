import React from "react";
import { minutesToDuration } from "../../utils/duration";

const Focus = ({
  focusLength,
  setFocusLength,
  isTimerRunning,
  isSessionActive,
}) => {
  const decrementFocusLength = () => {
    setFocusLength((lastFocus) => Math.max(5, lastFocus - 5)); // take the previous focus duration and subtract
  };

  const incrementFocusLength = () => {
    setFocusLength((lastFocus) => Math.min(60, lastFocus + 5));
  };

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          <p id="break-label">
            Focus Duration: {minutesToDuration(focusLength)}
            {/* use preloaded function to display focus length in minutes*/}
          </p>
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decrementFocusLength}
            disabled={isSessionActive || isTimerRunning ? true : false} // disabling button if session is active OR timer is running
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={incrementFocusLength}
            disabled={isSessionActive || isTimerRunning ? true : false}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Focus;
