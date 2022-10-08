import React, {useState} from 'react'
import Citizen from "./Citizen";

const ElectricalOfficer = () => {

    const [validAge, setValidAge] = useState(false);

    const handleCitizenAge = (citizenData) => {
        if(citizenData >= 18){
            setValidAge(true)
        }
    }
    return(
            <>
            <Citizen votingEligible={handleCitizenAge}/>
             {validAge ?   <p>You are eligible to Vote</p> :  <p>Sorry! your not eligibile </p>}            
            </>
    );
}
export default ElectricalOfficer;