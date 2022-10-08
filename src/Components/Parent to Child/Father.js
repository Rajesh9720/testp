import React, {useState} from 'react'
import Daughter from './Daughter';

const Father = () => {

    const [message, setMessage] = useState('');

    const daughterInDanger = (daughterMessage) => {
        setMessage(daughterMessage);
    }
    return(
            <>
            <p>Hai... Iam a Father component</p>
            <p>Message from Daughter : {message} </p>
            <Daughter emergency={ daughterInDanger } />
            </>
    );
}


export default Father;