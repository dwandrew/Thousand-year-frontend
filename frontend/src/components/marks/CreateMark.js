import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMark, editMark, getMarks, deleteMark } from '../../actions/MarkActions'
import { withRouter } from 'react-router-dom'


export class CreateMark extends Component {
    state = {
        name: '',
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
        this.props.createMark(this.state, this.props.immortal.id)
        this.props.markSubmit(this.state)
        this.setState({
            name: '',
            description: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteMark = e => {
        this.props.deleteMark(this.state.id)
        this.props.getMarks(this.props.immortal.id)
        this.setState({
            name: '',
            description: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.name !== ''){this.props.editMark(this.state)}
        this.props.handleParentEdit()
        this.props.getMarks(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'mark_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='name'>Mark Name</label>
            <input type= 'text' name= 'name' value= {this.state.name} onChange = {this.handleChange} placeholder = "enter mark name"/>
            <br/>
            <label htmlFor='decription'>Mark Description</label>
            <input type= 'text' name= 'description' value= {this.state.description} onChange = {this.handleChange} placeholder = "enter mark description"/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Mark" : "Add Mark"}</button>
            <button onClick = {this.deleteMark}> Delete Mark </button>
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
        createMark: (mark, immortal_id) => dispatch(createMark(mark, immortal_id)),
        editMark: (mark) => dispatch(editMark(mark)),
        getMarks: (immortal_id) => dispatch(getMarks(immortal_id)),
        deleteMark: (immortal_id) => dispatch(deleteMark(immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateMark))