import React, {useState} from 'react'

const Citizen = (props) => {

    const [ age, setAge ]= useState(17);

    const incrementAge = () => {
            setAge(age + 1);
            props.votingEligible(age);    
    }
   

    return(
    
    <>
    <p>My Age is : {age} </p>
    <button onClick={ incrementAge } >Increment Age</button>
    
    </>
    );
}

export default Citizen;