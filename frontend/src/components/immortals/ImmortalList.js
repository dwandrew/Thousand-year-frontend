import React from 'react'
import ImmortalSummary from './ImmortalSummary'

const ImmortalList =({immortals}) => {
        return (
            <div>
                <h3>List of Immortals</h3>
                <ul>
                    { immortals && immortals.map(immortal => {
                        return (
                            <ImmortalSummary immortal={immortal} key={immortal.id}/>
                        )
                    })}   
                </ul>
            </div>
        )
}

export default ImmortalList
