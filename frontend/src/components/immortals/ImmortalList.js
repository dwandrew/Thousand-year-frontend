import React from 'react'
import ImmortalSummary from './ImmortalSummary'

const ImmortalList =({ immortals }) => {
    if(immortals && immortals.length >= 1){
        return (
            <div>
                <ul className = 'immortal-list'>
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
