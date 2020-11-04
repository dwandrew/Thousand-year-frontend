import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createJournal, editJournal, getJournals, deleteJournal } from '../../actions/JournalActions'
import { withRouter } from 'react-router-dom'


export class CreateJournal extends Component {
    state = {
        entry: '',
        id: '',
        editing: false
    }

    componentDidMount(){
        if (this.props.editing){
            let {editData} = this.props
            this.setState({
                entry: editData.entry,
                editing: true,
                id: editData.id
            })

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createJournal(this.state, this.props.immortal.id)
        this.props.journalSubmit(this.state)
        this.setState({
            entry: '',
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    deleteJournal = e => {
        this.props.deleteJournal(this.state.id)
        this.props.getJournals(this.props.immortal.id)
        this.setState({
            entry: '', 
        })
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }

    handleEdit = (e) => {
        e.preventDefault()
        if (this.state.entry !== ''){this.props.editJournal(this.state)}
        this.props.handleParentEdit()
        this.props.getJournals(this.props.immortal.id)
        this.setState({
            editing: !this.state.editing
        }
        )
        this.props.history.push('/immortals/' + this.props.immortal.id)
    }



    render(){
        return (
        <div className = "create_form">
            <form id = 'journal_form' onSubmit = {!this.state.editing ? this.handleSubmit : this.handleEdit}>
            <label htmlFor='entry'>Journal Entry</label>
            <textarea name= 'entry' value = {this.state.entry} checked = {this.state.entry} onChange = {this.handleChange}/>
            <br/>
            <button type='submit'>{this.state.editing ? "Edit Journal" : "Add Entry"}</button>
            <button onClick = {this.deleteJournal}> Delete Entry </button>
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
        createJournal: (journal, immortal_id) => dispatch(createJournal(journal, immortal_id)),
        editJournal: (journal) => dispatch(editJournal(journal)),
        getJournals: (immortal_id) => dispatch(getJournals(immortal_id)),
        deleteJournal: (immortal_id) => dispatch(deleteJournal(immortal_id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateJournal))