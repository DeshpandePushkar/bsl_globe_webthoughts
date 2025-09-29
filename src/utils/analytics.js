import ReactGA from "react-ga4";

const TRACKING_ID = "G-MS1HE6ZHS7";
const ENABLE_ANALYTICS = "true";

export const initGA = () => {
  if (TRACKING_ID && ENABLE_ANALYTICS) {
    ReactGA.initialize(TRACKING_ID, {
      debug: process.env.NODE_ENV === "development",
    });

    console.log("Google Analytics initialized with ID:", TRACKING_ID);
  }
};

export const trackEvent = (eventData) => {
  if (!ENABLE_ANALYTICS) return;

  const {
    category,
    action,
    label = "",
    value = 0,
    ...customParameters
  } = eventData;

  // Validate required fields
  if (!category || !action) {
    console.warn("Analytics: category and action are required");
    return;
  }

  const eventObject = {
    category,
    action,
    label,
    value,
    ...customParameters,
  };

  ReactGA.event(eventObject);

  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventObject);
  }
};
export const trackFormStart = () => {
  trackEvent({
    category: "Form",
    action: "form_started",
    label: "multi_step_registration",
  });
};

export const trackStepProgress = (stepNumber, stepName) => {
  trackEvent({
    category: "Form",
    action: "step_progress",
    label: `step_${stepNumber}_${stepName}`,
    value: stepNumber,
  });
};

export const trackStepComplete = (
  stepNumber,
  stepName,
  additionalData = {}
) => {
  trackEvent({
    category: "Form",
    action: "step_completed",
    label: `step_${stepNumber}_${stepName}`,
    value: stepNumber,
    ...additionalData,
  });
};

export const trackFormError = (stepNumber, errorType, errorMessage) => {
  trackEvent({
    category: "Form",
    action: "form_error",
    label: `step_${stepNumber}_${errorType}`,
    value: stepNumber,
    error_message: errorMessage,
  });
};

export const trackOTPEvent = (action, attempts = 0) => {
  trackEvent({
    category: "OTP",
    action: action, // 'sent', 'verified', 'failed', 'resent'
    label: "phone_verification",
    value: attempts,
  });
};

export const trackFormComplete = (completionTime) => {
  trackEvent({
    category: "Form",
    action: "form_completed",
    label: "registration_success",
    value: completionTime,
  });
};

export const trackClick = (elementName, location = "") => {
  trackEvent({
    category: "UI",
    action: "click",
    label: elementName,
    location,
  });
};

export const trackPageView = (pageName) => {
  trackEvent({
    category: "Navigation",
    action: "page_view",
    label: pageName,
  });
};

export const trackError = (errorType, details = "") => {
  trackEvent({
    category: "Error",
    action: "error",
    label: errorType,
    details,
  });
};

export const trackScrollDepth = (percentage) => {
  trackEvent({
    category: "Engagement",
    action: "scroll_depth",
    label: `${percentage}%`,
    value: percentage,
  });
};

export const trackExternalLink = (url, linkText = "") => {
  trackEvent({
    category: "External",
    action: "external_link_click",
    label: url,
    link_text: linkText,
  });
};
