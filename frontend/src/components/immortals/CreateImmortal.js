import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createImmortal } from '../../actions/ImmortalActions'

export class CreateImmortal extends Component {
    state = {
        name: '',
        description: '',
        errors: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        let user_id = this.props.user.user.id
        this.props.createImmortal(this.state, user_id)
        this.setState({
            name: '',
            description: '',
            errors: ''
        })
        this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
                <h2>Create New Immortal</h2>
                <form className = "Immortal_Form" onSubmit ={this.handleSubmit}>
                    <label htmlFor="name">Immortal Name</label>
                    <input type = 'text' id='name' name='name' value = {this.state.name} onChange = {this.handleChange} placeholder = "enter name"/>
                    <label htmlFor="description">Description</label>
                    <textarea id='description' name='description' value = {this.state.description} onChange = {this.handleChange} placeholder='enter description'/>
                    <button type= "submit">Create New Immortal</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user}
}

const mapDispatchToProps = (dispatch) => {
    return{
        createImmortal: (immortal, id) => dispatch(createImmortal(immortal, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateImmortal)
