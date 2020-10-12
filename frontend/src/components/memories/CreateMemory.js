import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMemory, editMemory, getMemories, deleteMemory } from '../../actions/MemoryActions'
import { withRouter } from 'react-router-dom'


export class CreateMemory extends Component {
    state = {
        lost: false,
        in_diary: false,
        editing: false,
        id: '',
        immortal_id: ''
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                editing: true,
                lost: editData.lost,
                in_diary: editData.in_diary,
                id: editData.id,
                immortal_id: this.props.immortal.id
            })

        }
    }

   
    handleChange = (e) => {
        if (e.target.name === 'in_diary' || e.target.name === 'lost'){
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
        this.props.createMemory(this.state, this.props.immortal.id)
        this.setState({
            lost: false,
            in_diary: false,
            editing: false,
            id: '',
            immortal_id: ''
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteMemory = e => {

        this.props.deleteMemory(this.state.id)
        this.props.getMemories(this.props.immortal.id)
        this.setState({
            lost: false,
            in_diary: false,
            editing: false,
            id: '',
            immortal_id: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.id !== ''){this.props.editMemory(this.state)}
        this.props.handleParentEdit()
        this.props.getMemories(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'memory_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            
            <label htmlFor='in_diary'>Memory in Diary?</label>
            <input type="checkbox" name= 'in_diary' value = {this.state.in_diary} checked = {this.state.in_diary} onChange = {this.handleChange}/>
           
            <label htmlFor='lost'>Memory Lost?</label>
            <input type="checkbox" name= 'lost' value = {this.state.lost} checked = {this.state.lost} onChange = {this.handleChange}/>
           
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Memory" : "Add Memory"}</button>
            </form>
            <button onClick = {this.deleteMemory}> Delete Memory </button>
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
        createMemory: (Memory, immortal_id) => dispatch(createMemory(Memory, immortal_id)),
        editMemory: (Memory) => dispatch(editMemory(Memory)),
        getMemories: (immortal_id) => dispatch(getMemories(immortal_id)),
        deleteMemory: (immortal_id) => dispatch(deleteMemory(immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateMemory))