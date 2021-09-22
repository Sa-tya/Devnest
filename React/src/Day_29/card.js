
function Card(){
    let today = new Date()
    let time = (today.getHours() ? today.getHours() - 1 : today.getHours());

    return <>
    {
            locationData ? <>
                <div className='container1'>
                    <img src={img.icon} alt='Cloud'></img>
                    <h1>{current.temp_c}°C</h1>
                    <h5> {img.text} </h5>

                    <h2> <strong>{locationData.name}</strong>, {locationData.country}</h2> <br />
                    
                    <section className='innerContainer'>
                        <div><h6>Wind</h6><h6>{current.wind_kph} km/h</h6></div>
                        <div><h6>Humidity</h6><h6>{current.humidity}%</h6></div>
                        <div><h6>Precipitation</h6><h6>{current.precip_in}%</h6></div>
                    </section>
                    
                </div>
                <div className='weather'>
                    <div>
                        <section className='pseudo'></section>
                        <h4> Time : </h4>
                        <h4> Rains (%) :</h4>
                        <h4> Cloud (%) :</h4>
                        <h4> Temp (°C) :</h4>
                    </div>
                    {forecast.map((t, i) =>
                        time <= i && i < (time + 6) ?
                            <div key={i}>
                                <img src={forecast[i].condition.icon} alt={forecast[i].condition.text} />
                                <h5> {i}:00</h5>
                                <h5> {forecast[i].chance_of_rain}</h5>
                                <h5> {forecast[i].cloud}</h5>
                                <h5> {forecast[i].temp_c}</h5>
                            </div> : '')}
                            </div>
            </> : "Place Not Found"}
            </>
}

export default Card;