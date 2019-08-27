import React from 'react'
const Weather = ({ShowData})=>{
    return(
        <div className="Show">
           <div id="info">
           <p><span>City:</span> {ShowData.city}</p>
            <p><span>Country:</span> {ShowData.country}</p>
            <p><span>Tempreature:</span> {ShowData.tempreature}</p>
            <p><span>Humidity:</span> {ShowData.humidity}</p>
           </div>
            <p className="error">{ShowData.error}</p>
        </div>
    )
}
export default Weather;