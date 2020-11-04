import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateMemory from './CreateMemory'
import ExperienceList from '../experiences/ExperienceList'
import CreateExperience from '../experiences/CreateExperience'
import { getMemories } from '../../actions/MemoryActions'
import { withRouter } from 'react-router-dom'

export class MemorySummary extends Component{
    state = {
        editing: false,
        addingExperience: false,
        experiences: [],
        memory:[],
        id:'',
        loading:false
    }

    componentDidMount(){
    }

    componentDidUpdate(){
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    setParentEditState = () => {
            this.setState({
                addingExperience: !this.state.addingExperience,
            })
    }

    render(){
       let { memory } = this.props
       let { index } = this.props
       let experiences = this.props.memory.experiences
       if(this.props.memories.loading){

        if (!this.state.editing && !this.state.addingExperience && experiences.length < 3){
        return (
            <li>
                <div key= {memory.id} className = {memory.lost ? 'card-bloody' : 'card'}>
                    <h3>Memory id: { index+1 }</h3>
                    <p>Memory in diary? {memory.in_diary ? "Yes": 'No'}</p>
                    <p>Memory lost? {memory.lost ? "Yes": 'No'}</p>
                    <ExperienceList experiences = {experiences.sort((a, b) => a.id - b.id)}/>
                    <button onClick = {this.setParentEditState}>Add Experience</button>
                    <button onClick = {this.handleEdit}> Edit Memory </button>
                </div>
            </li>
        )
    }

    else if (!this.state.editing && !this.state.addingExperience && experiences.length === 3){
        return (
            <li>
                <div key= {memory.id} className = {memory.lost ? 'card-bloody' : 'card'}>
                    <h3>Memory id: { index+1 }</h3>
                    <p>Memory in diary? {memory.in_diary ? "Yes": 'No'}</p>
                    <p>Memory lost? {memory.lost ? "Yes": 'No'}</p>
                    <ExperienceList experiences = {experiences.sort((a, b) => a.id - b.id)}/>
                    <button onClick = {this.handleEdit}> Edit Memory </button>
                </div>
            </li>
        )
    }

    else if (!this.state.editing && this.state.addingExperience){
        return (
        <li>
                <div key= {memory.id} >
                    <h3>Memory id: { index+1 }</h3>
                    <p>Memory in diary? {memory.in_diary ? "Yes": 'No'}</p>
                    <p>Memory lost? {memory.lost ? "Yes": 'No'}</p>
                    <ExperienceList experiences = {experiences.sort((a, b) => a.id - b.id)}/>
                    <CreateExperience setParentEditState = {this.setParentEditState} memory_id = {memory.id} memoryState = {this.state} />
                    <button onClick = {this.handleEdit}> Edit Memory </button>
                </div>
            </li>
        )
    }

    else {
        return <CreateMemory editing ={this.state.editing} editData={ memory } handleParentEdit = {this.handleEdit} />
        }
    }
    else {
        return <p>Loading...</p>
    }
}
}

const mapStateToProps = (state) =>{
    return {
        ...state,
        immortal: state.immortal,
        memories: state.memories,

    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getMemories: (immortal_id) => dispatch(getMemories(immortal_id)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemorySummary))
