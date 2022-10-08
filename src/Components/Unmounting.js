import React from "react";
import Unmountnex from "./Unmountnex";

class Unmounting extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    deleteItems=()=>{
        this.setState({
            show:false
        });
    }
    render(){
        let itemsdel;
        if(this.state.show){
            itemsdel=<Unmountnex/>
        };
        return(
            <>
            {itemsdel}
            <button onClick={this.deleteItems}></button>          

            </>
        )
    }
    }
    export default Unmounting;