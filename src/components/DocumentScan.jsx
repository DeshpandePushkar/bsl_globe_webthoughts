import DocumentAutoCapture from "./innovatrics/DocumentAutoCapture";

const DocumentScan = ({ onContinue }) => {
  const handleDocumentScanComplete = (imageData, content) => {
    console.log("Document imageData:", imageData);
    console.log("Document content:", content);

    onContinue();
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <DocumentAutoCapture onPhotoTaken={handleDocumentScanComplete} />
    </div>
  );
};

export default DocumentScan;
