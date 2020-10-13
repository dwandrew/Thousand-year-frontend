import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateSkill from './CreateSkill'

export class SkillSummary extends Component{
    state = {
        editing: false
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
                <div key= {skill.id} className = {skill.checked ? 'card-bloody' : 'card' }>
                    <p>Skill: {skill.name}</p>
                    <p>Checked: {skill.checked ? "Yes" : "No"}</p>
                    <p>Lost: {skill.lost ? "Yes" : 'No'}</p>
                    <button onClick = {this.handleEdit}> Edit </button>
                </div>
            </li>
        )
    }
    else {
        return <CreateSkill editing ={this.state.editing} editData={ skill } handleParentEdit = {this.handleEdit} />
    }
    }
}

export default connect()(SkillSummary)
