import React, { createContext, useContext, useState } from "react";

const OnboardingDataContext = createContext(null);

export const useOnboardingData = () => {
  const context = useContext(OnboardingDataContext);
  if (!context) {
    throw new Error(
      "useOnboardingData must be used within an OnboardingDataProvider"
    );
  }
  return context;
};
export const OnboardingDataProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState(null);

  const updateOnboardingData = (data) => {
    setOnboardingData((prevData) => ({
      ...(prevData || {}),
      ...data,
    }));
  };

  const clearOnboardingData = () => {
    setOnboardingData(null);
  };

  return (
    <OnboardingDataContext.Provider
      value={{ onboardingData, updateOnboardingData, clearOnboardingData }}
    >
      {children}
    </OnboardingDataContext.Provider>
  );
};
