import React from 'react'

export const SkillSummary = ({skill}) => {
        return (
            <li>
                <div key= {skill.id} >
                    <p>Skill: {skill.name}</p>
                    <p>Checked: {skill.checked ? "Yes" : "No"}</p>
                    <p>Lost: {skill.lost ? "Yes" : 'No'}</p>
                    <button  > Edit </button>
                </div>
            </li>
        )
}




export default SkillSummary
