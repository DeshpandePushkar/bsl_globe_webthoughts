import "@innovatrics/dot-document-auto-capture";
import { useEffect } from "react";

function DocumentCamera(props) {
  useEffect(() => {
    const documentAutoCaptureHTMLElement = document.getElementById(
      "x-dot-document-auto-capture"
    );
    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  }, [props]);

  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
}

export default DocumentCamera;
