import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Additem } from './action'


function Addtodo() {
    const [work, setWork] = useState('')
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <h1>My ToDo's</h1>
            </div>
            <div>
                <input type="text" value={work}
                    onChange={(e) => setWork(e.target.value)}
                ></input>
                <button onClick={() => {
                    dispatch(Additem({
                        title: work,
                        done: false
                    }))
                    setWork('')
                }}>Add</button>
            </div>
        </>
    );
}

export default Addtodo;
