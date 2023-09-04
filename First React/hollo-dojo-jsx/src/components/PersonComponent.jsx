import React, { Component } from 'react'

class PersonComponent extends Component {
    render() {
        return (
            <fieldset>
                <legend>PersonComponent</legend>
                {this.props.people.map((person, idx)=> <div key={idx}>
                    <h4>{person.username}</h4>
                    <p>Age : {person.age}</p>
                    <p>Favorite Food : {person.favFood}</p>
                </div>)}
            </fieldset>
        )
    }
}
export default PersonComponent