import {sname} from './setInput';
import { useContext } from 'react'

function Get(){
    const name1 = useContext(sname);

    return <div> 
        {name1 ? <p> Name = {name1[0] + " Kumar"} <br></br> Age = {name1[1]} </p>
        : <h1>Get Output</h1>}
    </div>;
}
export default Get;