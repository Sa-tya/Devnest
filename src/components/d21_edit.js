//Add edit feature using functional component

import { useState } from 'react';
import './d21_form.css';

function Card(props) {
    const [edited, setEdited] = useState(false);
    const {id, l_item, l_cals, list, setList, delete1} = props; //props destructuring
    const [i1,setI1] = useState(l_item);
    const [c1,setC1] = useState(l_cals);

    // const Caution = l_cals>100 ? <h1>Dangerous</h1> :<div></div>;

     function edit() {
        setEdited(false)
        setList(list.map((t) => {
            if (t.id === id) {
                t.cals = c1
                t.item = i1
            }
            return t
        }))
    }
    
    return (edited ? <div className="card">
        <input type="text" value={i1} onChange={(e) => setI1(e.target.value)}></input>
        <input type="number" value={c1} onChange={(e) => setC1(e.target.value)}></input>
        <button className="delete" onClick={() => delete1()}>Delete</button>
        <button className="edit" onClick={() => edit() }>Done</button>
    </div> :
        <div className="card">
            <h1> {l_item} </h1>
            <h2> You have consumed {l_cals} calories.</h2>
            <h3>{l_cals>100 ? "Cautions :- Unhealthy for your health." :  "" }</h3>
            <button className="delete" onClick={() => delete1()}>Delete</button>
            <button className="edit" onClick={() => { setEdited(true) }}>Edit</button>
        </div>);
}

function Form() {
    const [item, setItem] = useState('')
    const [cals, setCals] = useState(undefined);
    const [id, setId] = useState(1);
    const [list, setList] = useState([]);

    function dlt(e) {
        setList(list.filter((t) => t.id !== e))
    }

    function submit(e) {
        e.preventDefault();
        let temp = ((list) => [...list, {
            id: id,
            item: item,
            cals: cals
        }])
        setItem('')
        setCals('')
        setList(temp)
        setId(id + 1);
    }

    return (<div>
        <form onSubmit={(e) => submit(e)}>
            <input type="text" value={item} name="item" onChange={e => setItem(e.target.value)}
                placeholder="Item..."></input>
            <input type="number" value={cals} name="calorie" onChange={e => setCals(e.target.value)}
                placeholder="Calorie..."></input>
            <br></br>
            <button type="submit">Add</button>
        </form>
        <div className="container">
            {
                list.map((e, i) => {
                    return <Card
                    key={i}
                    id={e.id}
                    l_item={e.item}
                    l_cals={e.cals}
                    list={list}
                    setList={setList}
                    delete1={() => dlt(e.id)}
                         />
                })
            }
        </div>
    </div>);
}
export default Form;