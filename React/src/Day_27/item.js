import { useSelector } from "react-redux";
import {Removeitem} from './action'
import {useDispatch} from 'react-redux'

function Item(){
    const dispatch = useDispatch()
    const items = useSelector((store)=> store.todo)
    
    return <>
        {
            items.map((item,indx)=> 
            <div key={indx}>
                <h5>{item.title}</h5>
                <button onClick={()=> dispatch(Removeitem(indx))}>Delete</button>
                <button>Edit</button>
            </div>
            )
        }
    </>;
}

export default Item;