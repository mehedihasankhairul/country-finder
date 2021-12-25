import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const [weather, setWeather] = useState([]);
    const API_key = 'eee912f2de7257f2641b10345a6c39ef';
    // weather api = 'http://api.weatherstack.com/current?access_key=eee912f2de7257f2641b10345a6c39ef&query=dhaka';
    // const {name,capital,languages,flag,population,region} = props.country
    console.log(props);

    const getWeather = () => {
        fetch(`http://api.weatherstack.com/current?access_key=${API_key}&query=${props.capital}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            })
    }

    return (
        <div className='container'>
            <div div className="weatherSection align-items-center justify-content-center text-center">
                {
                    !weather.current ? '' : <div>
                        <img src={weather.current.weather_icons} alt="" />
                        <span className="temp">Temperature : {weather.current.temperature}</span>
                        <span className='wind'>Wind Speed : {weather.current.wind_speed}</span>
                        <span className='direction'>Wind Direction : {weather.current.wind_dir}</span>
                        <span className='weather'>Weather : {weather.current.weather_descriptions}</span>
                    </div>
                }
                <button onClick={getWeather}>Capital Weather</button>
            </div>
        </div>
    );
};

export default Country;