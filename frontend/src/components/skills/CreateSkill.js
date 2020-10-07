import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSkill } from '../../actions/skillActions'
import { withRouter } from 'react-router-dom'


export class CreateSkill extends Component {
    state = {
        name: '',
        lost: false,
        checked: false,  
    }

    handleChange = (e) => {
        if (e.target.name === 'lost' || e.target.name === 'checked'){
            let value = e.target.checked
            console.log(value)
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
        this.props.createSkill(this.state, this.props.immortal.id)
        this.props.skillSubmit(this.state)
        this.setState({
            name: '',
            lost: false,
            checked: false,  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'skill_form' onSubmit = {this.handleSubmit}>
            <label htmlFor='name'>Skill Name</label>
            <input type= 'text' name= 'name' value= {this.state.name} onChange = {this.handleChange} placeholder = "enter skill name"/>
            <label htmlFor='lost'>Skill Lost</label>
            <input type="checkbox" name= 'lost' value = {this.state.lost} checked = {this.state.lost} onChange = {this.handleChange}/>
            <label htmlFor='checked'>Skill Checked</label>
            <input type="checkbox" name= 'checked' value = {this.state.checked} checked = {this.state.checked} onChange = {this.handleChange}/>
            <button type='submit'>Add Skill</button>
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
        createSkill: (skill, immortal_id) => dispatch(createSkill(skill, immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateSkill))