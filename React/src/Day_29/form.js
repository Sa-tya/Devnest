import { useSelector, useDispatch } from 'react-redux'
import { updatePlace, updateData} from './action'

function Form(){
    const city = useSelector(state => state.place)
    const dispatch = useDispatch()

    return <div className='head'>
            <input
                type='text'
                value={city}
                onChange={(e) => dispatch(updatePlace(e.target.value))}
                placeholder='Enter City Name'
                required
            ></input>
            <button className='' onClick={() => dispatch(updateData(city))}>Submit</button>
        </div>
}

export default Form;