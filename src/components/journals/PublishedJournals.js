import React from 'react'
import PublishedJournalSummary from './PublishedJournalSummary'

const PublishedJournals =( {journals, immortals} ) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (immortals && journals && journals.length >=1){
        return (
            <div>
                <ul style={listStyle} className = 'published-immortals-list'>
                    { journals && journals.map((journal, index) => {
                        if (journal.length >=1){
                        let immortalName =  immortals.find(immortal => immortal.id === journal[0].immortal_id)
                        if (immortalName !== undefined){
                            immortalName = immortalName.name
                        }
                        
                        return (
                            <PublishedJournalSummary journalEntries = {journal} name={immortalName} key={index} />
                        )
                        }
                        return <p key={index}>No Current Journal Entries for this Immortal</p>
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Journal Entries</h3>)
    }
}

export default PublishedJournals