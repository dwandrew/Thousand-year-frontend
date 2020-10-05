import React from 'react'
import ImmortalSummary from './ImmortalSummary'

const ImmortalList =() => {
        return (
            <div>
                <h3>List of Immortals</h3>
                <ul>
                    <ImmortalSummary/>    
                    <ImmortalSummary/>    
                    <ImmortalSummary/>    
                </ul>
            </div>
        )
}

export default ImmortalList
