import React from 'react';
import Titles from './components/titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const API_KEY = "b644f6262ea73aff24e9ab0b7da825d1";

//e is event object and is js thing
//make sure elements.city/country match name of input in Form.js
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();//replaces JSON.Stringify
    if (city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather["0"].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter these values"
    });
  }
}

  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {/*"this" is referecing App and is setting getWeather prop to getWeather func*/}
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;