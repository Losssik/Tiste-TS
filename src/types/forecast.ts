export type WeatherForecast = {
  city: {
    name: string;
  };
  list: {
    dt: number;
    main: {
      pressure: number;
    };
  }[];
};
