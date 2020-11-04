import React from 'react'
import JournalSummary from './JournalSummary'

const JournalList =({journals}) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (journals && journals.length >=1){
        return (
            <div>
                <h3>List of journals</h3>
                <ul style={listStyle}>
                    { journals && journals.map(journal => {
                        return (
                            <JournalSummary journal = {journal} key={journal.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Journal Entries</h3>)
    }
}

export default JournalList
