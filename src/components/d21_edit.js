//Add edit feature using functional component

import { useState } from 'react';
import './d21_form.css';

function Card(props) {
    const [edited, setEdited] = useState(false);
    const {l_item,l_cals,setItem,setCals,delete1,edit} = props;
    return (edited ? <div className="card">
        <input type="text" value={l_item} onChange={(e) => setItem(e.target.value)}></input>
        <input type="number" value={l_cals} onChange={(e) => setCals(e.target.value)}></input>
        <button className="delete" onClick={() => delete1()}>Delete</button>
        <button className="edit" onClick={() => {
            edit()
            setEdited(false)
        }}>Done</button>
    </div> :
        <div className="card">
            <h1>{l_item}</h1> <h2>{l_cals}</h2>
            <button className="delete" onClick={() => props.delete()}>Delete</button>
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
        console.log(e, "deleted...")
    }

    function edit(id) {
        list.map((t) => {
            if (t.id === id) {
                t.cals = cals
                t.item = item
            }
        })
        console.log(id, "Editted...")
    }
    function submit(e) {
        e.preventDefault();
        let temp = ((list) => [...list, {
            id: id,
            item: item,
            cals: cals
        }])
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
                    // console.log(e)
                    return <Card key={i} id={id} l_item={e.item} l_cals={e.cals} setItem={setItem} setCals={setCals}
                        delete1={() => dlt(e.id)} edit={() => edit(e.id)} />
                })
            }
        </div>
    </div>);
}
export default Form;