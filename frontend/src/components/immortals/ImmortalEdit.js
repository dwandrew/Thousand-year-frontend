import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editImmortal } from  '../../actions/ImmortalActions'

export class ImmortalEdit extends Component {
    state={
        name: '',
        description: '',
        publish_journal: false
    }

    componentDidMount(){

        this.setState({
            name: this.props.state.name,
            description: this.props.state.description,
            publish_journal: this.props.state.publish_journal,
            id: this.props.state.id
        })
    }

    handleChange = (e) =>{
        if (e.target.name === 'publish_journal'){
            let value = e.target.checked
            this.setState({
                [e.target.name]: value
            })
        }
        else{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
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
                    <label htmlFor= 'publish_journal'>Publish Journal?</label>
                    <input type="checkbox" name= 'publish_journal' checked={this.state.publish_journal} onChange = {this.handleChange}/>
           
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