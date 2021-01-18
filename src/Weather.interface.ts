export interface Weather {
  name: string,
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  wind: {
    speed: string
  }
  main: {
    humidity: number
    pressure: number
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
  }
  weather: {
    main: string
    description: string
  }[]
}
