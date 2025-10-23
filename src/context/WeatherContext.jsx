import { createContext, useReducer } from "react";

export const WeatherContext = createContext();

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        city: action.payload,
      };
    default:
      return state;
  }
};

export const WeatherCOntextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    city: null,
  });

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
