import React from "react";
import classNames from "../../utils/class-names";

function StartStopButton({
  playPause,
  isTimerRunning,
  stopTimer,
  isSessionActive,
}) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            onClick={stopTimer}
            disabled={!isSessionActive}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartStopButton;
