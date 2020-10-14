import React from 'react'
import JournalSummary from './JournalSummary'

const PublishedJournals =( {immortals, journals} ) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (journals && journals.length >=1){
        return (
            <div>
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

export default PublishedJournals