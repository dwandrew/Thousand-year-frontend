import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSkill, editSkill } from '../../actions/skillActions'
import { withRouter } from 'react-router-dom'


export class CreateSkill extends Component {
    state = {
        name: '',
        lost: false,
        checked: false,
        editing: false, 
        id: ''
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                editing: true,
                name: editData.name,
                lost: editData.lost,
                checked: editData.checked,
                id: editData.id
            })

        }
    }

    handleChange = (e) => {
        if (e.target.name === 'lost' || e.target.name === 'checked'){
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
        this.props.createSkill(this.state, this.props.immortal.id)
        this.props.skillSubmit(this.state)
        this.setState({
            name: '',
            lost: false,
            checked: false,  
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        this.props.editSkill(this.state)
        this.setState({
            editing: false
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'skill_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='name'>Skill Name</label>
            <input type= 'text' name= 'name' value= {this.state.name} onChange = {this.handleChange} placeholder = "enter skill name"/>
            <br/>
            <label htmlFor='lost'>Skill Lost</label>
            <input type="checkbox" name= 'lost' value = {this.state.lost} checked = {this.state.lost} onChange = {this.handleChange}/>
            <br/>
            <label htmlFor='checked'>Skill Checked</label>
            <input type="checkbox" name= 'checked' value = {this.state.checked} checked = {this.state.checked} onChange = {this.handleChange}/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Skill" : "Add Skill"}</button>
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
        createSkill: (skill, immortal_id) => dispatch(createSkill(skill, immortal_id)),
        editSkill: (skill) => dispatch(editSkill(skill))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateSkill))