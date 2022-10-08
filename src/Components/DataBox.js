import React, { useState } from 'react';

const DataBox= () => {
    const[box, setBox]= useState ();
    console.log(document.getElementById("u1"));

    return(
        <>
        <lable>Name:</lable>
        <input id="u1" type="text" value= { box } onChange={ (e) => setBox (e.target.value) }/>        
        <p>parent call me as {box} </p>     
        </>
    );
}
export default DataBox;