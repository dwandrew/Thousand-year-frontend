import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editImmortal } from  '../../actions/ImmortalActions'

export class ImmortalEdit extends Component {
    state={
        name: '',
        description: ''
    }

    componentDidMount(){
        this.setState({
            name: this.props.state.name,
            description: this.props.state.description,
            id: this.props.state.id
        })
    }

    handleChange = (e) =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    handleEditSubmit = (e) => {
            e.preventDefault()
            this.props.editImmortal(this.state)
            this.props.ceaseEditing()
        }

    render(){
    return (<form onSubmit = {this.handleEditSubmit}>
                    <input type= 'text' name='name'  value={this.state.name} onChange = {this.handleChange}></input>
                    <textarea value={this.state.description} name='description' onChange = {this.handleChange}></textarea>
                    <button type= "submit"> Confirm edit</button>
                </form>)

}
}


const mapDispatchToProps =  (dispatch) => {
    return{
        editImmortal: (immortalData) => dispatch(editImmortal(immortalData))
    }
}

export default connect(null, mapDispatchToProps)(ImmortalEdit)