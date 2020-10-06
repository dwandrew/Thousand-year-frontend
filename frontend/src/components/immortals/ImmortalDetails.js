import React, { Component } from 'react'
import { getImmortal, deleteImmortal } from  '../../actions/ImmortalActions'
import { connect } from 'react-redux'

export class ImmortalDetails extends Component {

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

    render(){
    const id = this.props.match.params.id
    let content
    if (this.props.auth.logged_in){
    if(this.props.immortal.name && this.props.auth.user.user.id === this.props.immortal.user_id){
    content = 
        <div id={id}>
            <h3>{this.props.immortal.name}</h3>
            <p>{this.props.immortal.description}</p>
            <ul>
                <li>Skills</li>
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
            <button onClick = {this.handleDelete}>Delete Immortal</button>
            
        </div>}
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
            user_id:state.immortal.immortal.user_id
        }
    }
}

const mapDispatchToProps =  (dispatch) => {
    return{
        getImmortal: (immortalId) => dispatch(getImmortal(immortalId)),
        deleteImmortal: (immortalId) => dispatch(deleteImmortal(immortalId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImmortalDetails)
