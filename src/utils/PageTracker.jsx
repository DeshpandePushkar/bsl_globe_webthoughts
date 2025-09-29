import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./analytics";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

export default PageTracker;
