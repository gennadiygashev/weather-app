import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchPanel from './SearchPanel/SearchPanel'
import WeatherPanel from './WeatherPanel/WeatherPanel'
import { Weather } from './Weather.interface'

function App() {
  const [background, setBackground] = useState({
    backgroundImage:
      "url('https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg')"
  })
  const [weather, setWeather] = useState<Weather | null>(null)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    q: string
  ) => {
    e.preventDefault()
    const apiKEY = `AIzaSyCcvqXpdhXHEMG9f6IqbPvCWzVCI24dYxI`
    const city = q

    try {
      const weather = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbb8821df0eb802c4dcb4feaaebdaef8&units=metric`
      )
      const image = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${city}+city+attractions+${weather.data.weather[0].main}&cx=78854e44c6b442723&key=${apiKEY}&searchType=image&alt=json`
      )

      setWeather(weather.data)
      setBackground({
        backgroundImage: `url(${image.data.items[0]['link']})`
      })
    } catch (e) {
      setError(true)
    }
  }

  return (
    <div className='App' style={background}>
      {weather ? (
        <WeatherPanel weather={weather} />
      ) : (
        <SearchPanel handleSubmit={handleSubmit} error={error} />
      )}
    </div>
  )
}

export default App
