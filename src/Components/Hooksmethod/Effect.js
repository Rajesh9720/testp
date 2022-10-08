import {useState} from 'react';

const Effect = () => {
    const[count,setCount]=useState(0);
    const[msg,setMsg]=useState(0);

    const Increse=()=>{setCount(count(count +1))}
    const Message=()=>{setMsg(msg("how to use effect method"))}


    return (
        <div>
            <h1>{Message}</h1>
            <button onClick={Increse}></button>
        </div>
    );
};

export default Effect;