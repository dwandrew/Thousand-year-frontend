import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateCharacter from './CreateCharacter'

export class CharacterSummary extends Component{
    state = {
        editing: false
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { character } = this.props
       if (!this.state.editing){

    return (
            <li>
                <div key= {character.id} className = 'character-card'>
                    <p>Character: {character.name}</p>
                    <p>Character is Immortal?: {character.is_immortal ? "Yes" : "No"}</p>
                    <p>Character is Dead?: {character.dead ? "Yes" : 'No'}</p>
                    <p>Description: {character.description}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateCharacter editing ={this.state.editing} editData={ character } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(CharacterSummary)
