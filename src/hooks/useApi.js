import { message } from "antd";
import { useState, useReducer, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Add this import
import { API_URL, API_METHODS } from "../../constants";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.result,
        status: action.payload.status,
        isLoading: false,
        isError: false,
        error: null,
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        data: null,
        error:
          action.payload.error ||
          action.payload.result?.error ||
          action.payload,
        status: action.payload.status,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

const getDataApiOptions = (method, requestBody, authorization, isFormData) => {
  let options = {
    method: method,
    headers: !isFormData
      ? {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authorization,
        }
      : {
          Authorization: authorization,
        },
  };
  if (requestBody) {
    options.body = !isFormData ? JSON.stringify(requestBody) : requestBody;
  }
  return options;
};

const useApi = (apiPath, body, method, isFormData) => {
  const { token, clearToken } = useAuth(); // Get token and clearToken from context

  let options = getDataApiOptions(method, body, token, isFormData);
  const [url] = useState(API_URL + apiPath);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: null,
    data: null,
    request: body,
  });

  const callApi = useCallback(
    async (body, newMethod, newAPIPath) => {
      let APIUrl = url;
      if (newAPIPath) {
        APIUrl = API_URL + newAPIPath;
      }

      if (newMethod) {
        method = newMethod;
      }

      let didCancel = false;

      // Use token from context instead of localStorage
      options = getDataApiOptions(method, body, token, isFormData);

      if (body) {
        options.body = !isFormData ? JSON.stringify(body) : body;
      }
      if (method === API_METHODS.GET) {
        options.body = null;
      }

      options.method = method;
      dispatch({ type: "FETCH_INIT" });

      const fetchRequest = new Request(APIUrl, options);

      try {
        let response = await fetch(fetchRequest);
        let status = response.status;
        let result = null;

        if (status !== 204) {
          result = await response.json();
        }

        if (!didCancel) {
          if (status === 401) {
            clearToken(); // Clear invalid token from context
            dispatch({
              type: "FETCH_FAILURE",
              payload: { result: { error: "Unauthorized" }, status },
            });
            return;
          }

          if (result?.error) {
            dispatch({
              type: "FETCH_FAILURE",
              payload: { result, status, error: result.error },
            });
          } else {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: { result, status },
            });
          }
        }
      } catch (error) {
        if (!didCancel) {
          message.error("Unable to connect to server. Please try again.");
          dispatch({
            type: "FETCH_FAILURE",
            payload: {
              error: "Network error",
              status: null,
              result: null,
            },
          });
        }
      }
    },
    [url, state && state.request, token, clearToken] // Add token and clearToken to dependencies
  );

  return [state, callApi];
};

export default useApi;
