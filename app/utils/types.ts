export interface IDate {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}
export enum IIcons {
  cloudy_snowing = 'cloudy_snowing',
  rainy = 'rainy',
  cloudy = 'cloudy',
  sunny_snowing = 'sunny_snowing',
  partly_cloudy_day = 'partly_cloudy_day',
  wb_sunny = 'wb_sunny',
  thunderstorm = 'thunderstorm',
}
export interface ILocation {
  lat: number;
  lon: number;
}
export interface IMarkedData {
  selected: boolean;
  main: string;
  description: string;
  dt_txt: string;
}
