import {
  createContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import type { WeatherData } from "../types/weather";

type ChildrenProp = {
  children: ReactNode;
};

type WeatherState = {
  city: WeatherData | null;
};

type WeatherAction = { type: "GET_WEATHER"; payload: WeatherData };

type WeatherContextType = {
  dispatch: Dispatch<WeatherAction>;
  city: WeatherData | null;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const weatherReducer = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        city: action.payload,
      };
    default:
      return state;
  }
};

export const WeatherContextProvider = ({ children }: ChildrenProp) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    city: null,
  });

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
