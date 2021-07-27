import React from 'react';
import './d17_food_calorie.css';

function Warning(){
    return <p style={{color:"red"}}> <strong>Warning :- </strong> It is bad for your health.</p>;
}

function fun (t){
    // t = parseInt(t)
    if(t>100) return <Warning />
}

function Card(props){
    let sign = fun(props.cals)
    return ( <div className="card">
        <h1>{props.food}</h1>
        <h3>You have consumed { props.cals || 90 } cals today !!</h3>
         {sign}
    </div> );
}
const dish = {
    Pizza: 190,
    Maggie: 0,
    Burger: 120,
    Coke: 500,
    Browne: 180,
    'Fried Rice': 90,
    Lassania: 200,
    'Pani Puri': 10
};

function container(){
return (<div> <h1>Calorie Read Only</h1>
    <div className="container">
    {Object.keys(dish).map((item) => {
    return <Card food={item} cals={dish[item]} />;
    })}
    {/* <Card food="Pizza" cals="190" />
    <Card food="Maggie" cals="" />
    <Card food="Egg-roll" cals="92" />
    <Card food="Samosa" cals="93" />
    <Card food="Burger" cals="103" />
    <Card food="Cold-drinks" cals="294" /> */}
    </div>
</div>);
}
export default container;