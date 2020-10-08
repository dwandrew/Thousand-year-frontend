import React from 'react'
import ImmortalSummary from './ImmortalSummary'

const ImmortalList =({user_id, immortals}) => {
    if(immortals && immortals.length >= 1){
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
        )}
    else {
        return <div> <h3>No Immortals currently made</h3> </div>
    }
}

export default ImmortalList
