import React from 'react'
import MarkSummary from './MarkSummary'

const MarkList =({marks}) => {
    if (marks && marks.length >=1){
        return (
            <div>
                <h3>List of Marks</h3>
                <ul>
                    { marks && marks.map(mark => {
                        return (
                            <MarkSummary mark = {mark} key={mark.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Marks</h3>)
    }
}

export default MarkList
