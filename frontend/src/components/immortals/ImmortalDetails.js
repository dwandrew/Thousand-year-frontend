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
    if(this.props.immortal.name){
    content = 
        <div id={id}>
            <h3>{this.props.immortal.name}</h3>
            <h4>{id}</h4>
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

        return (
            content
        )
}
}

const mapStateToProps = (state) =>{
    return {
        immortal:{
            name: state.immortal.immortal.name,
            description: state.immortal.immortal.description
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
