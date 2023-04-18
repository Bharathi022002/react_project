function FunctionEvent(){
    function handleClick(){
        console.log("Button clicked");
    };
    return (
        <div>
            This is function.
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default FunctionEvent;