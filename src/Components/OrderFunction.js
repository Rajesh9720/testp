import React, { useState } from "react";

// const OrderFunction=()=>{
//     let [conut,setcount]=useState(0);
//     const onClickHandle=()=>{setcount(conut +1)};
//     const onDecrementHandle=()=>{setcount(conut -1)};
//     const onRestHandle=()=>{setcount (0)};

//     return( <>
//             <h1>order realme phone [{conut}] </h1>
//             <button onClick={onClickHandle}>up</button>
//             <button onClick={onDecrementHandle}>down</button>
//             <button onClick={onRestHandle}>reset</button>  
//             </>)
// }
// export default OrderFunction;


const OrderFunction=()=>{
    let [conut,setcount]=useState(0);
    const onClickHandle=()=>{setcount(conut +1 )};
    const onDecrementHandle=()=>{
        if (conut >0) {
        setcount(conut -1)
        }else
        (setcount (0))}
    const onRestHandle=()=>    {setcount (0)};

    return( <>
            <h1>order realme phone [{conut}] </h1>
            <button onClick={onClickHandle}>up</button>
            <button onClick={onDecrementHandle}>down</button>
            <button onClick={onRestHandle}>reset</button>  
            </>)
}
export default OrderFunction;

