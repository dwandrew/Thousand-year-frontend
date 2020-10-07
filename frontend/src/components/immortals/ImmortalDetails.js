import React, { Component } from 'react'
import { getImmortal, deleteImmortal, editImmortal } from  '../../actions/ImmortalActions'
import CreateSkill from '../skills/CreateSkill'
import SkillList from '../skills/SkillList'
import { connect } from 'react-redux'
import ImmortalEdit from './ImmortalEdit'

export class ImmortalDetails extends Component {
    state = {
        name : '',
        description: '',
        editing: false,
        id: '',
        skills:[]
    }

    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getImmortal(id)
    }

    handleDelete = (e) =>{
        let id = e.target.parentNode.id
        console.log(e.target.parentNode)
        this.props.deleteImmortal(id)
        this.props.history.push('/')
    }

    handleChange = (e) =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleEdit = (e) =>{
        this.setState({
            editing: true,
            name: this.props.immortal.name,
            description: this.props.immortal.description,
            id: this.props.immortal.id,
            skills: this.props.immortal.skills
        })
    }

    ceaseEditing = (e) => {
        this.setState({
            editing: false,
        })
    }

    handleSkillSubmit = (skill) => {
        this.setState({
            skills: [...this.state.skills, skill],
            editing: false
        })
        let id = this.props.match.params.id
        this.props.getImmortal(id)
    }

    render(){
    const id = this.props.match.params.id
    let content
    if (this.props.auth.logged_in){

    if(this.props.immortal.name && this.props.auth.user.user.id === this.props.immortal.user_id){
        if (!this.state.editing){
    content = 
        <div id={id}>
            <h3>{this.props.immortal.name}</h3>
            <p>{this.props.immortal.description}</p>
            <ul>
  
                <li><SkillList skills={this.props.immortal.skills} /></li>
                <li>Characters</li>
                <li>Marks</li>
                <li>Resources</li>
                <li>
                    <div>Memories
                        <ol>
                            <li>Experience 1</li>
                            <li>Experience 2</li>
                            <li>Experience 3</li>
                        </ol>
                    </div></li>
                <li>Journal</li>
            </ul>
            <button onClick = {this.handleEdit}>Edit Immortal</button>
            <button onClick = {this.handleDelete}>Delete Immortal</button>
            
        </div>}
        else {
            content = <div>
                <ImmortalEdit ceaseEditing = {this.ceaseEditing} state= {this.state}/>
                <ul>
                <li><SkillList skills={this.props.immortal.skills} /></li>
                <br/>
                <CreateSkill state = {this.state} skillSubmit={this.handleSkillSubmit}/>
                <li>Characters</li>
                <li>Marks</li>
                <li>Resources</li>
                <li>
                    <div>Memories
                        <ol>
                            <li>Experience 1</li>
                            <li>Experience 2</li>
                            <li>Experience 3</li>
                        </ol>
                    </div></li>
                <li>Journal</li>
            </ul>
            
            </div>
        }
            
        }
        else 
        { content = <div>
            <h1>No Immortal Of this ID on Database</h1>
        </div>}
        }
        else { content = <div><h1>Login to view Immortal Details</h1></div>}   
        return (
            content
        )
}
}

const mapStateToProps = (state) =>{
    return {
        ...state,
        immortal:{
            name: state.immortal.immortal.name,
            description: state.immortal.immortal.description,
            id: state.immortal.immortal.id,
            user_id:state.immortal.immortal.user_id,
            skills: [...state.immortal.immortal.skills]
        }
    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getImmortal: (immortalId) => dispatch(getImmortal(immortalId)),
        deleteImmortal: (immortalId) => dispatch(deleteImmortal(immortalId)),
        editImmortal: (immortalData) => dispatch(editImmortal(immortalData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImmortalDetails)
