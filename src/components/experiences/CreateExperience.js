import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createExperience, editExperience, getExperiences, deleteExperience } from '../../actions/ExperienceActions'
import { getMemories } from '../../actions/MemoryActions'
import { withRouter } from 'react-router-dom'


export class CreateExperience extends Component {
    state = {
        prompt: 0,
        description: '',
        editing: false, 
        id: ''
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                editing: true,
                prompt: editData.prompt,
                description: editData.description,
                id: editData.id
            })

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createExperience(this.state, this.props.memory_id, this.props.history, this.props.immortal.id, this.props.getMemories)
        this.props.setParentEditState()
        this.setState({
            prompt: 0,
            description: '',
            id: ''  
        })
    }

    deleteExperience = e => {
        this.props.deleteExperience(this.state.id , this.props.history, this.props.immortal.id, this.props.getMemories)
        this.setState({
            prompt: 0,
            description: '',
            id: '',
            editing: !this.state.editing  
        })
        this.props.handleParentEdit()
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.description !== '')
        {this.props.editExperience(this.state, this.props.history, this.props.immortal.id, this.props.getMemories)}
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.handleParentEdit()
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'experience_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='prompt'>Experience Prompt</label>
            <input type= 'number' name= 'prompt' value= {this.state.prompt} onChange = {this.handleChange} placeholder = "enter experience prompt"/>
            <br/>
            <label htmlFor='decription'>Experience Description</label>
            <textarea name= 'description' value= {this.state.description} onChange = {this.handleChange} placeholder = "enter experience description"/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Experience" : "Add Experience"}</button>
            </form>
            <button onClick = {this.deleteExperience}> Delete Experience </button>
        </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        immortal: state.immortal.immortal,
        memory: state.memories.memories,
        experiences: state.experiences.experiences
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createExperience: (experience, memory_id, history, immortal_id, get_memories) => dispatch(createExperience(experience, memory_id, history, immortal_id, get_memories)),
        editExperience: (experience, history, immortal_id, get_memories) => dispatch(editExperience(experience, history, immortal_id, get_memories)),
        getExperiences: (memory_id) => dispatch(getExperiences(memory_id)),
        deleteExperience: (memory_id, history, immortal_id, get_memories) => dispatch(deleteExperience(memory_id, history, immortal_id, get_memories)),
        getMemories: (immortal_id) => dispatch(getMemories(immortal_id))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateExperience))