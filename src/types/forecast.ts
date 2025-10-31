export type WeatherForecast = {
  city: {
    name: string;
  };
  list: {
    dt: number;
    dt_txt: string;
    main: {
      pressure: number;
    };
  }[];
};
