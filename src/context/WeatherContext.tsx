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

type Coords = {
  lat: number;
  lon: number;
};

type WeatherState = {
  city: WeatherData | null;
  coords: Coords | null;
};

type WeatherAction =
  | { type: "GET_WEATHER"; payload: WeatherData }
  | { type: "SET_COORDS"; payload: Coords };

type WeatherContextType = {
  dispatch: Dispatch<WeatherAction>;
  city: WeatherData | null;
  coords: Coords | null;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const weatherReducer = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, city: action.payload };
    case "SET_COORDS":
      return { ...state, coords: action.payload };
    default:
      return state;
  }
};

export const WeatherContextProvider = ({ children }: ChildrenProp) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    city: null,
    coords: null,
  });

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
