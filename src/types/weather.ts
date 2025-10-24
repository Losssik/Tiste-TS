export type WeatherData = {
  name: string;
  main: {
    temp: number;
    pressure: number;
  };
  clouds: {
    all: number;
  };
  wind: {
    deg: number;
    gust?: number;
    speed: number;
  };
  sys: {
    sunrise: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};
