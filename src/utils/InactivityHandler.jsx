import React, { useState, useEffect, useCallback } from "react";

import { useNavigate } from "react-router-dom";

const InactivityHandler = ({ children }) => {
  const [lastActivity, setLastActivity] = useState(Date.now());
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  const INACTIVITY_TIME = 5 * 60 * 1000;
  const CHECK_INTERVAL = 1000;

  const handleActivity = useCallback(() => {
    setHasNavigated(false); // Reset navigation flag
    setLastActivity(Date.now());
  }, []);

  useEffect(() => {
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [handleActivity]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivity;

      if (timeSinceLastActivity >= INACTIVITY_TIME && !hasNavigated) {
        setHasNavigated(true);
        navigate("/inactivity");
      }
    }, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [lastActivity, navigate, INACTIVITY_TIME, CHECK_INTERVAL]);

  return <>{children}</>;
};

export default InactivityHandler;
