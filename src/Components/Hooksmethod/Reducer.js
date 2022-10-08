import React,{ useReducer } from 'react';
const reducer = (state, action) => {
        switch(action.type){
                case 'pizza': {
                        return {
                                pizza : state.pizza + 1,
                                burger : state.burger,
                                sandwich : state.sandwich                        }
                            }
                                case 'burger':{
                        return {
                                pizza : state.pizza,
                                burger : state.burger + 1,
                                sandwich : state.sandwich }
                        }
                case 'sandwich':{
                                            return {
                                pizza : state.pizza,
                                burger : state.burger,
                                sandwich : state.sandwich + 1                        }  
                }
                case 'reset': {
                        return {
                                pizza : 0,
                                burger : 0,
                                sandwich : 0                        }
                                            }
                default: {
                        return state;
                }
        }
}
function App() {
  const [state, dispatch]  = useReducer(reducer, { pizza : 0, burger : 0, sandwich : 0});
  const orderPizza = () =>{
        dispatch({ type: 'pizza'});
  }
  const orderBurger = () =>{
        dispatch({type: 'burger'});
  }
  const orderSandwich = () =>{
        dispatch({type: 'sandwich'});
  }
  const resetOrders = () =>{
        dispatch({type: 'reset'});
  }
  return (
                <>
                <button onClick= { orderPizza } >Pizza </button>
                <button onClick={orderBurger }>Burger</button> 
                <button onClick={orderSandwich}>Sandwich </button>
                <button onClick={ resetOrders }>Reset Orders</button>
                <p>You have ordered { state.pizza }Pizza</p> 
                <p>You have ordered {state.burger} Burger </p> 
                <p>You have ordered { state.sandwich } Sandwich</p>
                </>  
                );
}
export default App;