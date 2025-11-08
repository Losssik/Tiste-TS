import {
  createContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import type { WeatherData } from "../types/weather";
import type { WeatherForecast } from "../types/forecast";

type ChildrenProp = {
  children: ReactNode;
};

type Coords = {
  lat: number;
  lon: number;
};

type MoonPhase = {
  moon_phase: string;
  moon_illumination_percentage: string;
  sunrise: string;
  sunset: string;
} | null;

type WeatherState = {
  city: WeatherData | null;
  coords: Coords | null;
  forecast: WeatherForecast | null;
  favorites: WeatherData[] | [];
  moonPhase: MoonPhase;
};

type WeatherAction =
  | { type: "GET_WEATHER"; payload: WeatherData }
  | { type: "SET_COORDS"; payload: Coords }
  | { type: "GET_FORECAST"; payload: WeatherForecast }
  | { type: "ADD_FAVORITE"; payload: WeatherData }
  | { type: "REMOVE_FAVORITE"; payload: Coords }
  | { type: "GET_MOON_PHASE"; payload: MoonPhase };

type WeatherContextType = {
  dispatch: Dispatch<WeatherAction>;
  city: WeatherData | null;
  coords: Coords | null;
  forecast: WeatherForecast | null;
  favorites: WeatherData[] | [];
  moonPhase: MoonPhase | null;
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
    case "GET_FORECAST":
      return { ...state, forecast: action.payload };
    case "GET_MOON_PHASE":
      return { ...state, moonPhase: action.payload };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) =>
            fav.coord.lat !== action.payload.lat ||
            fav.coord.lon !== action.payload.lon
        ),
      };

    default:
      return state;
  }
};

export const WeatherContextProvider = ({ children }: ChildrenProp) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    city: null,
    coords: null,
    forecast: null,
    favorites: [],
    moonPhase: null,
  });

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
