import {Component} from "react";

class ClassEvent extends Component{
    handleClick(){
        console.log("Button clicked");
    }
    render(){
        return(
            <div>
                This is ClassEvent.
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default ClassEvent;