import React, { useEffect } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState,setWeatherState] = React.useState("");
    const {
        temp,humidity,pressure,weathermood,name,speed,country,sunset
    } = tempInfo; //destructing 

    useEffect(()=> {
        if(weathermood) {
            switch(weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    },[weathermood])

    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>
                    {weathermood}
                </div>
                <div className='place'>{name},{country}</div>
            </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>

        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <i className={"wi wi-sunrise hi"}></i>
                    <p className='extra-info-leftside'>{timeStr} PM <br />Sunset</p>
                </div>
                <div className='two-sided-section'>
                    <i className={"wi wi-rain hi"}></i>
                    <p className='extra-info-leftside'>{humidity} PM <br />Humidity</p>
                </div>
            </div>
            <div className='weather-extra-info'>
            <div className='two-sided-section'>
                    <i className={"wi wi-rain hi"}></i>
                    <p className='extra-info-leftside'>{pressure}<br />Pressure</p>
                </div>
                <div className='two-sided-section'>
                    <i className={"wi wi-strong-wind hi"}></i>
                    <p className='extra-info-leftside'>{speed} PM <br />Speed</p>
                </div>
            </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard
