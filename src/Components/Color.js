import "./Color.css"

const Color =(props)=>{
    const uiStyle={backgroundColor:props.color}
    return(
        <div style ={uiStyle} className="one">{props.colorName}</div>
    );
}
export default Color;