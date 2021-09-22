const updatePlace = (place)=>{
    return {
        type: 'UPDATE_PLACE',
        payload: place
    }
}

const updateData = (place)=>{
    return dispatch => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=3a81ceec694b4589a6791432212707&q=${place}`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: 'UPDATE_DATA',
                    payload: data
                })
                // setLocationData(data.location)
                // setImg(data.current.condition)
                // setCurrent(data.current)
                // setForecast(data.forecast.forecastday[0].hour)
            })
    }
    
}
export {updatePlace, updateData};