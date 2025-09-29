import SmileLiveness from "./innovatrics/SmileLiveness";

const SelfieCapture = ({ onContinue }) => {
  const handleSelfieComplete = (imageData, content) => {
    console.log("Selfie imageData:", imageData);
    console.log("Selfie content:", content);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <SmileLiveness onPhotoTaken={handleSelfieComplete} />
    </div>
  );
};

export default SelfieCapture;
