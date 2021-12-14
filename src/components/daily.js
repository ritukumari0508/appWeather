import React from 'react';
import './forecast-weather.scss'

class Daily extends React.Component {
    render () {
    
    const forecastItemss = this.props.forecask.map((f, i)=>{
        const URL =`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`;
       
        const key=`forecask-item_${i}`;
        


        let day = new Date().getDay();
        if(i===0)
        {
            day ='Sun';
        }
        else if(i ===1){
        day ='Mon';
        }
        else if(i ===2){
        day ='Tue';
        }
        else if(i ===3){
        day ='Wed';
        }
        else if(i ===4){
        day ='Thu';
        }
        else if(i===5){
        day ='Fri';
        }
        else {
        day ='Sat'
        }
        
        
        
        return(
            <div className="forecast-item" key ={key}>
                <p className='"forecast-item__time"'>{day}</p>
                <p className="forecast-item__temp">{f.temp.max}</p>
                
              <img className="forecast-item__img"src={URL} alt ={f.weather[0].description}/>
                <p className='forecast-item__description'>{f.weather[0].main}</p>
            </div>
        );
    });
    return(<div className='forecast'>
        <h3 className="forecast__title">Daily Forecast</h3>
        <div className="forecast-items">{forecastItemss}</div>
    </div>
    
            )
        
    }
    }
    

export default Daily
