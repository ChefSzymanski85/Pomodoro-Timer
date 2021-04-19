import React from "react";
import { minutesToDuration } from "../../utils/duration";

const Break = ({
  breakLength,
  setBreakLength,
  isTimerRunning,
  isSessionActive,
}) => {
  const decrementBreakLength = () => {
    setBreakLength((lastBreak) => Math.max(1, lastBreak - 1)); // take the previous break duration and subtract
  };

  const incrementBreakLength = () => {
    setBreakLength((lastBreak) => Math.min(15, lastBreak + 1));
  };

  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            <p id="break-label">
              Break Duration: {minutesToDuration(breakLength)}
              {/* use preloaded function to display break length in minutes*/}
            </p>
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decrementBreakLength}
              disabled={isSessionActive || isTimerRunning ? true : false} // disabling button if session is active OR timer is running
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={incrementBreakLength}
              disabled={isSessionActive || isTimerRunning ? true : false}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Break;
