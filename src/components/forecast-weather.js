import React from 'react'
import './forecast-weather.scss';

class Forecast extends React.Component {
render () {

const forecastItems = this.props.forecast.map((f, i)=>{
    const URL =`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
   
    const key=`forecast-item_${i}`;
    let ampm ='AM'
    let hour = new Date(f.dt*1000).getHours();
    if(hour>12) {
        hour=hour-12;
        ampm = 'PM'
    }
    return(
        <div className="forecast-item" key ={key}>
            <p className="forecast-item__time">{hour}:00{ampm}{" "}</p>
            <p className="forecast-item__temp">{f.temp} <span className="forecast-item__degree">°</span></p>
          <img className="forecast-item__img"src={URL} alt ={f.weather[0].description}/>
            <p className='forecast-item__description'>{f.weather[0].main}</p>
        </div>
    );
});
return(<div className='forecast'>
    <h3 className="forecast__title">Hourly Forecast</h3>
    <div className="forecast-items">{forecastItems}</div>
</div>

        )
    
}
}

export default Forecast;
