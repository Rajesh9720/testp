import React from "react";

class Mounting extends React.Component{
    constructor(props){
        super(props);
        this.state={myfavcolor:"red"}
    }
    static getdrivedstatefromprops(props,state){
        return{
            myfavcolor:"Black"
        };
    }
    render(){
        return<p>my fav colour :{this.state.myfavcolor}</p>
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({myfavcolor:"white"})
    //     },5000)
    // }
}
export default Mounting;



