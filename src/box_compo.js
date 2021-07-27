import React from 'react';

//  Using functional component 

//     function Box(){
//         return <div className="box"></div>;
//     }
    
//     function Row(){
//         return (<div className="row">
//             {/* {[...Array(8).map(()=> <Box /> )]} */}
//             <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box />
//         </div>);
//     }
// export default Row;

// Using class component 

class Box extends React.Component{
    render(){
        return  <div className="box"></div> ;   
    }
};

export default class Row extends React.Component{
    render(){
        return  <div className="row">
            <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box /> <Box />
        </div> ;
    }
};