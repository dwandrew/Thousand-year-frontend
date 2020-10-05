import React, { Component } from 'react'

export class CreateImmortal extends Component {
    state = {
        name: '',
        description: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            name: '',
            description: ''
        })
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

export default CreateImmortal
