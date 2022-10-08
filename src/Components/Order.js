import React from "react";

class Order extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increaseOrder=()=>{this.setState({count:this.state.count +1})}

    decreaseOrder=()=>{this.setState({count:this.state.count -1})}

    resetOrder=()=>{this.setState({count:0})}

    render(){
        return(
            <>
            <h1>iphone 13</h1>
            <button onClick={this.increaseOrder}>Order Now</button>
            <button onClick={this.decreaseOrder}>Order Now</button>
            <button onClick={this.resetOrder}>Order Now</button>
            <h1>You have Order iphone 13 ({this.state.count})</h1>          
            </>
        )
    }

}
export default Order;

