import React, { Component } from 'react';
import InputData from './compnetes/From';
import Weather from './compnetes/Weather';
import background from './img/bg.jpg'
import axios from 'axios'

const api_key = '21ffa6e425f48f62567dca17adcee17f';
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  addweather = (weth)=>{
    if(weth.country && weth.country){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${weth.city},${weth.country}&appid=${api_key}`)
      .then(res=>{
        this.setState({
          tempreature:`${res.data.main.temp}` + `F`,
          city:`${res.data.name}`,
          country:`${res.data.sys.country}`,
          humidity:`${res.data.main.humidity}` + `%`,
          description:`${res.data.description}`,
          error:''
        })
      })
    } else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter Country and city to Get Weather'
      })
    }
  }
  render() {
    return (
      <div className="App">
        
        <div className="image">
            <h1>Weather Finder</h1>
            <p>Find Out The Tempreature,Weather Condition and More</p>
        </div>
        <div className='content'>
        <InputData weatherForm ={this.addweather} />
        <Weather ShowData ={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
