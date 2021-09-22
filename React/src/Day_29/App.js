import { useState } from "react";
import './style.css'
import Card from './card'
import Form from "./form";
import store from "./store";
import {Provider} from 'react-redux'
function App() {
    // const [city, setCity] = useState('Patna');
    // const [locationData, setLocationData] = useState('')
    // const [forecast, setForecast] = useState([])
    // const [img, setImg] = useState('')
    // const [current, setCurrent] = useState('')
    // const [time, setTime] = useState(0)

    // function submit() {
        
    //     setTime(today)
        
        // fetch(`https://api.weatherapi.com/v1/forecast.json?key=3a81ceec694b4589a6791432212707&q=${city}`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // console.log(data)
        //         setLocationData(data.location)
        //         setImg(data.current.condition)
        //         setCurrent(data.current)
        //         setForecast(data.forecast.forecastday[0].hour)
        //     })
    // }
    return <section>
        <header>
            <h1><strong>Today's Weather</strong></h1>
            <h3>Check weather of any major city</h3>
        </header>
        <Form />
        <Provider store={store}>
        <Card />
        </Provider>
            <footer>
                <h3>Information is provide by <a href='https://www.weatherapi.com/'><strong>Weather API</strong></a></h3>
            </footer>
    </section>
}

export default App;

