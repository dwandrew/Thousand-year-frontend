import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createResource, editResource, getResources, deleteResource } from '../../actions/ResourceActions'
import { withRouter } from 'react-router-dom'


export class CreateResource extends Component {
    state = {
        name: '',
        lost: false,
        stationary: false,
        editing: false,
        description: '', 
        id: ''
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                editing: true,
                name: editData.name,
                lost: editData.lost,
                stationary
: editData.stationary
,
                description: editData.description,
                id: editData.id
            })

        }
    }

    handleChange = (e) => {
        if (e.target.name === 'lost' || e.target.name === 'stationary'){
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
        this.props.createResource(this.state, this.props.immortal.id)
        this.props.resourceSubmit(this.state)
        this.setState({
            name: '',
            lost: false,
            stationary: false,
            description: ''  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteResource = e => {
        this.props.deleteResource(this.state.id)
        this.props.getResources(this.props.immortal.id)
        this.setState({
            name: '',
            lost: false,
            stationary: false,
            description: '',
            id: ''    
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.name !== ''){this.props.editResource(this.state)}
        this.props.handleParentEdit()
        this.props.getResources(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'resource_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='name'>Resource Name</label>
            <input type= 'text' name= 'name' value= {this.state.name} onChange = {this.handleChange} placeholder = "enter Resource name"/>
            <br/>
            <label htmlFor='stationary'>Resource stationary</label>
            <input type="checkbox" name= 'stationary' value = {this.state.stationary} checked = {this.state.stationary} onChange = {this.handleChange}/>
            <br/>
            <label htmlFor='lost'>Resource Lost</label>
            <input type="checkbox" name= 'lost' value = {this.state.lost} checked = {this.state.lost} onChange = {this.handleChange}/>
            <br/>
            <label htmlFor='description'>Resource Description</label>
            <textarea name= 'description' value= {this.state.description} onChange = {this.handleChange} placeholder = "enter resource description"/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Resource" : "Add Resource"}</button>
            <button onClick = {this.deleteResource}> Delete Resource </button>
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
        createResource: (resource, immortal_id) => dispatch(createResource(resource, immortal_id)),
        editResource: (resource) => dispatch(editResource(resource)),
        getResources: (immortal_id) => dispatch(getResources(immortal_id)),
        deleteResource: (immortal_id) => dispatch(deleteResource(immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateResource))