import React, { Component } from 'react'

export class PublishedJournalSummary extends Component {
    state = {
        display: false
    }

    handleDisplay = () =>[
        this.setState({
            display: !this.state.display
        })
    ]

   render(){
        let listStyle = {
            listStyleType: "none",
            padding: '5px',  
        }
       let {journalEntries} = this.props
       let {name} = this.props
    return (
    <div className = 'published-journal-card' id = {journalEntries[0].id}> 
    <ul style={listStyle}>
    {journalEntries.map((journal, index) => {
        if (this.state.display){
        return(
            <li key= {index}>
                <p>Entry {index+1}: {journal.entry}</p>
            </li>)
        }
        return(<p key = {index}></p>)
    }
        )}
    </ul>
    <button onClick= {this.handleDisplay}>{this.state.display ? `Hide ${name}'s Journal` : `View ${name}'s Journal`}</button>
    </div>  
    )
}
   
}

export default PublishedJournalSummary
