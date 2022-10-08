const Daughter = (props) => {

    const onClickHandler = () =>{
        props.emergency("Dad!......Im in Danger Come to velacherry ")
    }   
        return(
            <>
            <p>Hai.. I am a daughter component</p>
            <button onClick={ onClickHandler } >Click me when you want to communicate to dad</button>
            </>
        )
    } 
export default Daughter;