import { useEffect } from "react";
import "@innovatrics/dot-smile-liveness"; // This line is crucial as it registers the custom HTML element

const SmileLivenessCamera = (props) => {
  useEffect(() => {
    const smileLivenessHTMLElement = document.getElementById(
      "x-dot-smile-liveness"
    );

    if (smileLivenessHTMLElement) {
      smileLivenessHTMLElement.props = props;
    }
  }, [props]);

  return <x-dot-smile-liveness id="x-dot-smile-liveness" />;
};

export default SmileLivenessCamera;
