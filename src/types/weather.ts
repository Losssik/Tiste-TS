export type WeatherData = {
  name: string;
  main: {
    temp: number;
    pressure: number;
  };
  clouds: {
    all: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  wind: {
    deg: number;
    gust?: number;
    speed: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  rain?: {
    "1h": number;
  };
  snow?: {
    "1h": number;
  };
};
