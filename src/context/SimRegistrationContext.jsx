import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  currentStep: 1,
  mobileNumber: '',
  registrationType: '',
  idDocument: null,
  selfieImage: null,
  personalInfo: {},
  isLoading: false,
  error: null,
};

// Action types
const ACTIONS = {
  SET_CURRENT_STEP: 'SET_CURRENT_STEP',
  SET_MOBILE_NUMBER: 'SET_MOBILE_NUMBER',
  SET_REGISTRATION_TYPE: 'SET_REGISTRATION_TYPE',
  SET_ID_DOCUMENT: 'SET_ID_DOCUMENT',
  SET_SELFIE_IMAGE: 'SET_SELFIE_IMAGE',
  SET_PERSONAL_INFO: 'SET_PERSONAL_INFO',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  RESET_REGISTRATION: 'RESET_REGISTRATION',
};

// Reducer function
const simRegistrationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case ACTIONS.SET_MOBILE_NUMBER:
      return { ...state, mobileNumber: action.payload };
    case ACTIONS.SET_REGISTRATION_TYPE:
      return { ...state, registrationType: action.payload };
    case ACTIONS.SET_ID_DOCUMENT:
      return { ...state, idDocument: action.payload };
    case ACTIONS.SET_SELFIE_IMAGE:
      return { ...state, selfieImage: action.payload };
    case ACTIONS.SET_PERSONAL_INFO:
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case ACTIONS.RESET_REGISTRATION:
      return initialState;
    default:
      return state;
  }
};

// Create context
const SimRegistrationContext = createContext();

// Provider component
export const SimRegistrationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(simRegistrationReducer, initialState);

  // Action creators
  const actions = {
    setCurrentStep: (step) => dispatch({ type: ACTIONS.SET_CURRENT_STEP, payload: step }),
    setMobileNumber: (number) => dispatch({ type: ACTIONS.SET_MOBILE_NUMBER, payload: number }),
    setRegistrationType: (type) => dispatch({ type: ACTIONS.SET_REGISTRATION_TYPE, payload: type }),
    setIdDocument: (document) => dispatch({ type: ACTIONS.SET_ID_DOCUMENT, payload: document }),
    setSelfieImage: (image) => dispatch({ type: ACTIONS.SET_SELFIE_IMAGE, payload: image }),
    setPersonalInfo: (info) => dispatch({ type: ACTIONS.SET_PERSONAL_INFO, payload: info }),
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTIONS.SET_ERROR, payload: error }),
    resetRegistration: () => dispatch({ type: ACTIONS.RESET_REGISTRATION }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return (
    <SimRegistrationContext.Provider value={value}>
      {children}
    </SimRegistrationContext.Provider>
  );
};

// Custom hook to use the context
export const useSimRegistration = () => {
  const context = useContext(SimRegistrationContext);
  if (!context) {
    throw new Error('useSimRegistration must be used within a SimRegistrationProvider');
  }
  return context;
};

export default SimRegistrationContext;
