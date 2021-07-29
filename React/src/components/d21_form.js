import {useState} from 'react';
import './d21_form.css'
function Card(props){
    const [edit, setEdit] = useState(false);
    
    return ( edit ? <div className="card"> 
        <input type="text" value={props.item} onChange={(e)=> {props.setItem(e.target.value)}}></input>
        <input type="number" value={props.cals} onChange={(e)=> {props.setCalorie(e.target.value)}}></input>
        <button className="delete">Delete</button>
        <button className="edit" onClick={()=> { setEdit(false)}}>Done</button>
    </div> :
    <div className="card">
        <h1>{props.item}</h1> <h2>{props.cals}</h2>
        <button className="delete">Delete</button>
        <button className="edit" onClick={()=> setEdit(true)}>Edit</button>
    </div>);
}

function Form(){
    const [item,setItem] = useState("");
    const [calorie,setCalorie] = useState("");
    const [list , setList] = useState([])

     function submit(event){
        let temp = ((list)=> [...list,{
           item: item,
            cals: calorie
        }])
        setList(temp)
        setItem("");
        setCalorie("");
        event.preventDefault();
    }
    function Container(){
        
        return(<div className="container">
            {[(list).map((t , index)=>{ //console.log(t)
                    return <Card key={index} item={t.item} cals={t.cals} setItem={setItem} setCalorie={setCalorie}/>;
                 }
            )]}
        </div>);
    }
    return (<div><form>
        <label>
        <input type="text" value={item}  name="item" onChange={e=> setItem(e.target.value)} placeholder="Item..." />
        </label>
        <label>
        <input type="number" value={calorie} name="calorie" onChange={e=> setCalorie(e.target.value)} placeholder="Calorie..." />
        </label> <br></br>
        <button onClick={e=> submit(e)}> Add</button>
    </form> <Container />
    </div>);
}

export default Form;