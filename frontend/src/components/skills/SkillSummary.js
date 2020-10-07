import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateSkill from './CreateSkill'

export class SkillSummary extends Component{
    state = {
        editing: false,
        skill:{
            name: '',
            checked: false,
            lost: false
        }
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){    
       let { skill } = this.props
       if (!this.state.editing){
    return (
            <li>
                <div key= {skill.id} >
                    <p>Skill: {skill.name}</p>
                    <p>Checked: {skill.checked ? "Yes" : "No"}</p>
                    <p>Lost: {skill.lost ? "Yes" : 'No'}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateSkill editing ={this.state.editing} editData={ skill } />
    }
    }
}




export default connect()(SkillSummary)
