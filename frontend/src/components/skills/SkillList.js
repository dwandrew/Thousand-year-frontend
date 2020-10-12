import React from 'react'
import SkillSummary from './SkillSummary'

const SkillList =({skills}) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (skills && skills.length >=1){
        return (
            <div>
                <h3>List of Skills</h3>
                <ul style={listStyle}>
                    { skills && skills.map(skill => {
                        return (
                            <SkillSummary skill = {skill} key={skill.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Skills</h3>)
    }
}

export default SkillList
