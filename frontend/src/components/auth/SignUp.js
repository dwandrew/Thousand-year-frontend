import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
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
                <h2>Sign Up</h2>
                <form className = "Sign_Up_Form" onSubmit ={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type = 'text' id='username' name='username' value = {this.state.username} onChange = {this.handleChange} placeholder = "enter username"/>
                    <label htmlFor="email">Email</label>
                    <input type = 'text' id='email' name='email' value = {this.state.email} onChange = {this.handleChange} placeholder = "enter email"/>
                    <label htmlFor="password">Password</label>
                    <input type ='password' id='password' name='password' value = {this.state.password} onChange = {this.handleChange} placeholder='enter password'/>
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type ='password' id='password_confirmation' name='password_confirmation' value = {this.state.password_confirmation} onChange = {this.handleChange} placeholder='enter password confirmation'/>
                    <button type= "submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp
