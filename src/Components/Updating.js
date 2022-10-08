import React from "react";

class Updating extends React.Component{
    constructor(props) {  
        super(props)
                this.state={
                    studentName:"Siva",
                    age:21,
                    degree:"Bsc Cs"
                }
                }
        onButton=()=>{
            this.setState({
                    studentName:"Gokul",
                    age:22,
                    degree:"Bsc maths"
            })
        }
        shouldComponentUpdate(){
            return true
    }
        render(){
            return( <>
            <h1>studentName:{this.state.studentName}</h1>
            <h1>studentAge: {this.state.age}</h1>
            <h1>studentDegree: {this.state.degree}</h1>
            <button onClick={this.onButton}>Click Me</button>
            </>)
        }
}
export default Updating;