export type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  clouds: {
    all: number;
  };
  wind: {
    deg: number;
    gust?: number;
    speed: number;
  };
};
