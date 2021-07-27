import React, { useState } from 'react';
import './d17_food_calorie.css';

var dish = {
    Pizza: 190,
    Maggie: 0,
    Burger: 120,
    Coke: 500,
    Browne: 180,
    'Fried Rice': 90,
    Lassania: 200,
    'Pani Puri': 10
};
function Warning(){
    return <p style={{color:"red"}}> <strong>Warning :- </strong> It is bad for your health.</p>;
}

function fun (t){
    if(t>100) return <Warning />
}

function Card(props){
    let sign = fun(props.cals)
    const pop = ()=>{
        dish =  Object.keys(dish).filter(key =>
            key !== props.food).reduce((obj, key) =>
            {
                obj[key] = dish[key];
                return obj;
            }, {}
        );
        props.setFoodlist(dish)
    }
    return ( <div className="card">
        <h1>{props.food}</h1> <button type="button" onClick={ pop}>X</button>
        <h3>You have consumed { props.cals || 90 } cals today !!</h3>
         {sign}
    </div> );
}

 function Setlist (props){
    const t = props.item
    return (t !== {} ? <div className="container">
        {Object.keys(t).map((item) => {
        return <Card food={item} cals={t[item]} setFoodlist={props.setFoodlist} />;
        })}
    </div> : <div>No any Food in Container</div>) ;
 }
function Container(){
    const [foodlist,setFoodlist] = useState(dish)
    return (<div> <h1>Calorie Read Only</h1>
            {<Setlist item={foodlist} setFoodlist={setFoodlist}/>}
    </div>);
}
export default Container;