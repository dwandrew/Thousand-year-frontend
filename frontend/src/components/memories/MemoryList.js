import React from 'react'
import MemorySummary from './MemorySummary'

const MemoryList =({memories}) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (memories && memories.length >=1){
        return (
            <div>
                <h3>List of Memories</h3>
                <ul style = {listStyle}>
                    { memories && memories.map((memory, index) => {
                        return (
                            <MemorySummary memory = {memory} index = {index} key={memory.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Memories</h3>)
    }
}

export default MemoryList
