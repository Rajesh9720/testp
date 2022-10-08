import React, { useRef } from 'react';


const Refmethod = () => {

   let nameField = useRef("rajesh");
   // always returns only one object with only one property : current.

   const onChangeHandler = (event) =>{
      nameField.current = event.target.value;
      console.log(nameField.current);
   }

  return (
          <> 
            <input type="text" ref={nameField} onChange={ onChangeHandler } />
            <p> Entered Text : { nameField.current }</p>
          </>
        );
}

export default Refmethod;