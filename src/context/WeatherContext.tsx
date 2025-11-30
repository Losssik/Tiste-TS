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

type Moon = string;

type Coords = {
  lat: number;
  lon: number;
};

type MoonPhase = {
  lat: number;
  lon: number;
  moon_phase: string;
  moon_illumination_percentage: number;
  sunrise: string;
  sunset: string;
};

export type River = {
  station_id: string;
  water_level: number;
  river_status: string;
  station_name: string;
  previous_water_level: number;
  trend: string;
  history_minimum: string;
  history_maximum: string;
  river: string;
  river_length: number;
  coords: {
    lat: number;
    lon: number;
  };
};

type WeatherState = {
  city: WeatherData | null;
  coords: Coords | null;
  forecast: WeatherForecast | null;
  favorites: WeatherData[] | [];
  moonPhases: MoonPhase[] | [];
  moon: Moon | null;
  river: River | null;
};

type WeatherAction =
  | { type: "GET_WEATHER"; payload: WeatherData }
  | { type: "SET_COORDS"; payload: Coords }
  | { type: "GET_FORECAST"; payload: WeatherForecast }
  | { type: "ADD_FAVORITE"; payload: WeatherData }
  | { type: "REMOVE_FAVORITE"; payload: Coords }
  | { type: "GET_MOON"; payload: Moon }
  | { type: "GET_RIVER"; payload: River }
  | { type: "GET_MOON_PHASE"; payload: MoonPhase };

type WeatherContextType = {
  dispatch: Dispatch<WeatherAction>;
  city: WeatherData | null;
  coords: Coords | null;
  forecast: WeatherForecast | null;
  favorites: WeatherData[] | [];
  moonPhases: MoonPhase[] | [];
  moon: Moon | null;
  river: River | null;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const weatherReducer = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, city: action.payload };
    case "GET_RIVER":
      return { ...state, river: action.payload };
    case "SET_COORDS":
      return { ...state, coords: action.payload };
    case "GET_MOON":
      return { ...state, moon: action.payload };
    case "GET_FORECAST":
      return { ...state, forecast: action.payload };
    case "GET_MOON_PHASE":
      return { ...state, moonPhases: [...state.moonPhases, action.payload] };
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
    moonPhases: [],
    moon: null,
    river: null,
  });

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
