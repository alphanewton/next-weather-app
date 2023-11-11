import { number } from "joi";

interface WeatherData {
  main: {
    feels_like: number;
    temp: number;
    humidity: number;
  };
  weather: AddInfo[];
  name: string;
  wind: {
    speed: number;
  };
}

interface AddInfo {
  icon: string;
  main: string;
}
