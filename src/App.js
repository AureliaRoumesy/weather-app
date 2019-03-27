import React, { Component } from 'react';
import './App.css';

import DisplayWeatherCard from "./DisplayWeatherCard";

const APIkey = '4DlN2YIPhbTzSeQteWoqP17GEQNtHJMQ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      weathers: undefined,
      city: undefined
    };
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude.toFixed(3),
          longitude: position.coords.longitude.toFixed(3)
        })
        this.getWeather();
      },
      (error) => { console.log(error); },
      { enableHighAccuracy: true, timeout: 30000 }
    )
  }

  getWeather = () => {
    // Récupération du lieu via fetch avec les latitudes et longitude
    fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIkey}&q=${this.state.latitude}%2C${this.state.longitude}&language=fr-FR&details=true&toplevel=true`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.LocalizedName
        });
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.Key}?apikey=${APIkey}&language=fr-FR&details=true&metric=true`)
        .then(response => response.json())
        .then(data => {
          
          // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
          this.setState({
            weathers: data.DailyForecasts
          });
          
        })
      })
  }

  render() {
    console.log(this.state.weathers)
    return (
      
      <div className="App">
        <header>
          <h1>Météo à {this.state.city}</h1>
        </header>
        <div className="row justify-content-center">
          {this.state.weathers ? this.state.weathers.map(weather => (
            <DisplayWeatherCard 
              icon={`https://vortex.accuweather.com/adc2010/images/slate/icons/${weather.Day.Icon}.svg`}
              date={weather.Date}
              IconPhrase={weather.Day.IconPhrase}
              MinTemp={weather.Temperature.Minimum.Value}
              MaxTemp={weather.Temperature.Maximum.Value}
              FeelMinTemp={weather.RealFeelTemperature.Minimum.Value}
              FeelMaxTemp={weather.RealFeelTemperature.Maximum.Value}
              Wind={weather.Day.Wind.Speed.Value}
              WindGust={weather.Day.WindGust.Speed.Value}
              Liquid={weather.Day.TotalLiquid.Value}
              />
          )) : ''}
        </div>
      </div>
    );
  }
}

export default App;
