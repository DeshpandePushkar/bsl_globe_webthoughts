import SmileLivenessCamera from "./SmileLivenessCamera";
import SmileLivenessUi from "./SmileLivenessUi";
import React from "react";

function SmileLiveness({ onPhotoTaken }) {
  const handleOnComplete = (data, content) => {
    onPhotoTaken(data, content);
  };

  const handleError = (error) => {
    console.error("Liveness error:", error);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <SmileLivenessUi showCameraButtons={true} />
      <SmileLivenessCamera
        onComplete={handleOnComplete}
        onError={handleError}
      />
    </div>
  );
}

export default SmileLiveness;
