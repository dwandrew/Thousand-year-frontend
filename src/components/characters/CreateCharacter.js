import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCharacter, editCharacter, getCharacters, deleteCharacter } from '../../actions/CharacterActions'
import { withRouter } from 'react-router-dom'


export class CreateCharacter extends Component {
    state = {
        name: '',
        is_immortal: false,
        dead: false,
        description: '',
        editing: false, 
        id: ''
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                editing: true,
                name: editData.name,
                is_immortal: editData.is_immortal,
                dead: editData.dead,
                description: editData.description,
                id: editData.id
            })

        }
    }

    handleChange = (e) => {
        if (e.target.name === 'is_immortal' || e.target.name === 'dead'){
            let value = e.target.checked
            this.setState({
                [e.target.name]: value
            })
        }
        else{
        this.setState({
            [e.target.name] : e.target.value
        })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createCharacter(this.state, this.props.immortal.id)
        this.props.characterSubmit(this.state)
        this.setState({
            name: '',
            dead: false,
            is_immortal: false,
            description: '',
            id: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteCharacter = e => {
        this.props.deleteCharacter(this.state.id)
        this.props.getCharacters(this.props.immortal.id)
        
        this.setState({
            name: '',
            dead: false,
            is_immortal: false,
            description: '',
            id: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.name !== ''){this.props.editCharacter(this.state)}
        this.props.handleParentEdit()
        this.props.getCharacters(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'character_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='name'>Character Name</label>
            <input type= 'text' name= 'name' value= {this.state.name} onChange = {this.handleChange} placeholder = "enter character name"/>
            <br/>
            <label htmlFor='description'>Character Description</label>
            <textarea name= 'description' value= {this.state.description} onChange = {this.handleChange} placeholder = "enter character description"/>
            <br/>
            <label htmlFor='is_immortal'>Character is Immortal?</label>
            <input type="checkbox" name= 'is_immortal' value = {this.state.is_immortal} checked = {this.state.is_immortal} onChange = {this.handleChange}/>
            <br/>
            <label htmlFor='dead'>Character is Dead?</label>
            <input type="checkbox" name= 'dead' value = {this.state.dead} checked = {this.state.dead} onChange = {this.handleChange}/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Character" : "Add Character"}</button>
            <button onClick = {this.deleteCharacter}> Delete Character </button>
            </form>
        </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        immortal: state.immortal.immortal
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createCharacter: (character, immortal_id) => dispatch(createCharacter(character, immortal_id)),
        editCharacter: (character) => dispatch(editCharacter(character)),
        getCharacters: (immortal_id) => dispatch(getCharacters(immortal_id)),
        deleteCharacter: (immortal_id) => dispatch(deleteCharacter(immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateCharacter))