import React from 'react'
import SkillSummary from './SkillSummary'

const SkillList =({skills}) => {
        return (
            <div>
                <h3>List of Skills</h3>
                <ul>
                    { skills && skills.map(skill => {
                        return (
                            <SkillSummary skill = {skill} key={skill.id}/>
                        )
                    })}   
                </ul>
            </div>
        )
}

export default SkillList
