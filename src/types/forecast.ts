export type WeatherForecast = {
  city: {
    name: string;
  };
  list: {
    dt: number;
    dt_txt: string;
    clouds: {
      all: number;
    };
    main: {
      pressure: number;
      temp: number;
    };
  }[];
};
