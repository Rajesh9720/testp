function Animal (){
    const Phone = () => <h1>i had phone</h1>;
    const EarPhone = () => <h1>i had not earphone</h1>
    let Allphone ="black";

    //     return <Phone/>}
    // else
    // { return <EarPhone/>
    // }
    return (Allphone === "black") ? <Phone/> : <EarPhone/>
   
    

}
export default Animal;