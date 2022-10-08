import React,{ useState } from "react";

const TextBoxLen=()=>{
    const[total,setTotal]=useState(0);
    const onUpdate=()=>{
        let data =document.getElementById("one").value;
        setTotal(data.length)
    }
    return(
        <>
        <input id="one" type="text" onChange={onUpdate}/>
        <h1>The above TextBox Contains ({total}) number of words</h1>       
        </>
    )
}
export default TextBoxLen;