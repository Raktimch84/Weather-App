import React, { useState } from 'react'
import './weatherapp.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weatherapp = () => {
    let api_key = "141701a456c2382c9767e047cc1dc61d";
    const [wicon,seticon] = useState(cloud_icon)
    const  search = async () =>{
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value==="")
            return 0;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = `${data.main.humidity} %`;
        wind[0].innerHTML = `${data.wind.speed} km/h`
        temperature[0].innerHTML= `${data.main.temp}°C`
        location[0].innerHTML = data.name;
        const ic = data.weather[0].icon;
        console.log(ic);
        if(ic==="01d"||ic==="01n")
            seticon(clear_icon)
        else if(ic==="02d"||ic==="02n" || ic==="03d"||ic==="03n" || ic==="04d"||ic==="04n" || ic==="50d" || ic==="50n")
            seticon(cloud_icon)
        else if(ic==="09d"|| ic==="09n")
            seticon(drizzle_icon);
        else if(ic==="13d" || ic==="13n")
            seticon(snow_icon);
        else    
            seticon(rain_icon);
    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'></input>
            <div className='search-icon' onClick={()=> search()}>
                <img src={search_icon} alt='search' />
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt='cloud' />
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>Kolkata</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt='' className='icon'></img>
                <div className='data'>
                    <div className='humidity-percent'>50%</div>
                    <div className='text'>Humidty</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon'></img>
                <div className='data'>
                    <div className='wind-rate'>18 km/h</div>
                    <div className='text'>Windspeed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Weatherapp
