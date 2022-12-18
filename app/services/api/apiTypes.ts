export interface IApiResponse<t> {
  ok: boolean;
  problem: boolean;
  data?: t;
  status?: number;
  headers?: any;
  config?: any;
  duration?: any;
}
export interface ICityData {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface IWeather {
  id: number;
  main: 'Clouds';
  description: string;
  icon: string;
}
export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface IWeatherList {
  main: IMain;
  weather: IWeather[];
  clouds: {
    all: number;
  };
  wind: any;
  sys: any;
  dt_txt: string;
}
export interface IFiveDayResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherList[];
  city: ICityData;
}
export interface ICityResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  base: string;

  main: IMain;

  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
    dt: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
}
