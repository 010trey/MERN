import React, {Component} from "react";

class SomeClassComponent extends Component {
    render() {
        return (
            <fieldset>
                <legend>🎈🎈🎈SomeClassComponent🎈🎈🎈</legend>
                {this.props.animals.map((animal, idx)=> <h4 key={idx}> {animal} 👻🎈✅ </h4>)}
            </fieldset>
        )
    }
}
export default SomeClassComponent;