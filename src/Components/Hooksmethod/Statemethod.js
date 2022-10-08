import React,{ useState } from "react";

const Statemethod = () => {
  let [conut, setcount] = useState(0);
  const onClickHandle = () => {setcount(conut + 1);};  
  const onDecrementHandle = () => {
    if (conut > 0){
    setcount(conut - 1);
    }else
    alert("it's not a correct method")
    (setcount(0))
    };

  const onRestHandle = () => {setcount(0);};


  return (
    <div className="rajesh">
      <h1>order realme phone [{conut}] </h1>
      <button onClick={onClickHandle}>up</button>
      <button onClick={onDecrementHandle}>down</button>
      <button onClick={onRestHandle}>reset</button>
    </div>
  );
};
export default Statemethod;