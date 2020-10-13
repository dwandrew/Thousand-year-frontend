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
        this.props.createExperience(this.state, this.props.memory_id)
        this.props.getMemories(this.props.immortal.id)
        this.props.setParentEditState()
        this.setState({
            prompt: 0,
            description: '',
            id: ''  
        })
        this.props.history.push('/')
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteExperience = e => {
        this.props.deleteExperience(this.state.id)
        this.props.getMemories(this.props.immortal.id)
        this.setState({
            prompt: 0,
            description: '',
            id: '',
            editing: !this.state.editing  
        })
        this.props.handleParentEdit()
        this.props.history.push('/')
        this.props.history.push('/immortals/' + this.props.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.description !== ''){this.props.editExperience(this.state)}
        this.props.getMemories(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.handleParentEdit()
        this.props.history.push('/immortals/' + this.props.immortal.id)
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
        createExperience: (experience, memory_id) => dispatch(createExperience(experience, memory_id)),
        editExperience: (experience) => dispatch(editExperience(experience)),
        getExperiences: (memory_id) => dispatch(getExperiences(memory_id)),
        deleteExperience: (memory_id) => dispatch(deleteExperience(memory_id)),
        getMemories: (immortal_id) => dispatch(getMemories(immortal_id))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateExperience))