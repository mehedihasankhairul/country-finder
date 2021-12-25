import React, { useState } from "react";
import Country from "./Country";
import "./Home.css";


const Home = ({ capital }) => {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")

  const getCountry = (e) => {
    e.preventDefault();
    const inputCountry = e.target.value;
    setCountry(inputCountry);

  }
  const submitCountry = () => {

    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => response.json())
      .then(data => setCountries(data[0]))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="justify-content-center align-items-center">
          <div className="searchBox">
            <div className="inputBox ">
              <input onChange={getCountry} type="text" required placeholder="Enter Country" />
              <button onClick={submitCountry} type="submit">Search</button>
            </div>
            <div className="infoArea">
              {
                !countries?.name ? '' :
                  <div className="countryInfo">
                    < img src={countries?.flags?.png} alt="" />
                    <h3> Capital : {countries?.capital}</h3>
                    <h3> Population : {countries?.population}</h3>
                    <h3>Latlng : {capital?.latlng}</h3>
                  </div>
              }
            </div>
            <div className="weatherInfo">
              {
                !countries?.capital ? '' : <Country capital={countries.capital} />
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;