import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSkill } from '../../actions/skillActions'


export class CreateSkill extends Component {
    state = {
        name: '',
        lost: false,
        checked: false,
        user_id: ''    
    }

    render(){
        return 
        <div className = "create_form">
            <form></form>
        </div>
    }





}

const mapDispatchToProps = (dispatch) =>{
    return{
        createSkill: (skill, immortal_id) => dispatch(createSkill(skill, immortal_id))
    }
}

export default connect(null, mapDispatchToProps)(CreateSkill)