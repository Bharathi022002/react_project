function FunctionEvent(){
    const handleClick=()=>{
        console.log("Button clicked");
    }
    return(
        <div>
            This is Function.
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default FunctionEvent;