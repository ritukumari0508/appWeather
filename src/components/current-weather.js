import React from 'react';
import './current-weather.scss'

class CurrentWeather extends React.Component{
    
    render(){
        const URL =`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
        return (
            <div className='current-weather'>
                <div className="current-weather__main-content"> 
                    <p className='current-weather__temperature'>
                        {this.props.currentTemperature} <span className="current-weather__degree">°</span>
                        </p>
                    <p className='current-weather__description'>
                        {this.props.description}
                        </p>
                    <img className='current-weather__icon' src = {URL} alt={this.props.description}/>
                </div>
                <div>
                <p className='current-weather__feels-like'>
                    Feels Like {this.props.feelsLike}
                </p>
                </div>

            </div>
        );
    }
}

export default CurrentWeather;