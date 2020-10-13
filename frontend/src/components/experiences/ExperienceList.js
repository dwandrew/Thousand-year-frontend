import React from 'react'
import ExperienceSummary from './ExperienceSummary'

const ExperienceList =({experiences}) => {
    let listStyle = {
        padding: '5px',  
    }

    if (experiences && experiences.length >=1){
        return (
            <div>
                <h3>List of Experiences</h3>
                <ol style = {listStyle}>
                    { experiences && experiences.map(experience => {
                        return (
                            <ExperienceSummary experience = {experience} key={experience.id}/>
                        )
                    })}   
                </ol>
            </div>
        )}
    else {
        return ( <h3>No experiences</h3>)
    }
}

export default ExperienceList
