import axios from "axios"
import { useState } from "react"


const Weather = () => {


    const [city, setcity] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [des,setdes] =  useState("")
    

    const handlecity = (event) => {
        setcity(event.target.value)
    }

    const getweather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23a8ef00fe9e8c015d4ad734c4e8b506`)

        weatherdata.then(function(climate)
    {
        console.log(climate.data)
        setweather(climate.data.weather[0].main)
        setdes(climate.data.weather[0].description)
        settemp(climate.data.main.temp)
        
       
    })
    }


    return (
        <div>
            <div className="bg-black p-10 ">
                <div className="bg-green-700 p-10 border rounded-md border-none">
                    <h1>Weather Report</h1>
                    <p>I can give you a weather report about your city!</p>
                    <input type="text" className="w-60 py-2 my-2 border rounded-md outline-none"  onChange={handlecity} /><br />
                    <button className="bg-black text-white p-2 border rounded-md border-none mb-1"
                    onClick={getweather}>Get Report</button>
                  <h1><b>Wearther:</b>{weather}</h1>  
                  <h1><b>Temperture:</b>{temp}</h1> 
                 <h1><b>Description:</b>{des}</h1> 
                </div>
            </div></div>
    )
}
export default Weather