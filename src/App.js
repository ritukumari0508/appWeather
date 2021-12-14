import './App.scss';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/current-weather';
import Daily from './components/daily';


import React from 'react';
import Forecast from './components/forecast-weather';
import {getCurrentWeather, getForecast} from './apis/open-weather api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      temp:"",
      feelsLike:"",
      description:"",
      icon:"",
      hourlyForecast: [],
      dailyForecast: [],
      max:"",
     


    };
 }
  onInputChange(e){
this.setState({
  location: e.target.value,
});

  }

  async onFormSubmit(){
    
   const weatherRes = await getCurrentWeather(this.state.location);
   const lat = weatherRes.data.coord.lat;
   const lon = weatherRes.data.coord.lon;
   const forecastRes = await getForecast(lat, lon);

   

this.setState({
  temp:weatherRes.data.main.temp,
  feelsLike:weatherRes.data.main.feels_like,
  description: weatherRes.data.weather[0].main,
  icon:weatherRes.data.weather[0].icon,
  hourlyForecast:forecastRes.data.hourly,
  dailyForecast: forecastRes.data.daily,
  
 
  
});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar 
        location ={this.state.location} 
        inputChange={(e) => this.onInputChange(e)}
        formSubmitted={()=> this.onFormSubmit()}
        />
        <CurrentWeather
         currentTemperature={this.state.temp} 
        feelsLike={this.state.feelsLike}
        description={this.state.description}
        icon={this.state.icon}
        />
        <Forecast forecast ={this.state.hourlyForecast}  />
        <Daily forecask ={this.state.dailyForecast}  />
      </header>
    </div>
  );
}
}

export default App;
