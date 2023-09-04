import React from "react";

class FirstClassComponent extends React.Component {
    render() {
        console.log(this.props);
        return (
            <fieldset>
                <legend>--- FirstClassComponent ---</legend>
                <h1>Hello From First Class Component👻👻👻</h1>
                <h2>Number From App.js  = {this.props.number}</h2>
                <hr />
                <h2>JOHN From App.js  = {JSON.stringify(this.props.john)}</h2>
            </fieldset>
        )
    }
}

export default FirstClassComponent;