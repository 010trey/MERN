import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        return (
            <fieldset>
                <legend>🔥🔥🔥PersonCard🔥🔥🔥</legend>
                <div >
                    <h4>{this.props.person.username}</h4>
                    <p>Age : {this.props.person.age}</p>
                    <p>Favorite Food : {this.props.person.favFood}</p>
                </div>
            </fieldset>
        )
    }
}

export default PersonCard 