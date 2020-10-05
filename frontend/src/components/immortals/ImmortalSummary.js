import React from 'react'

export const ImmortalSummary = ({immortal}) => {

        return (
            <li>
                <div key= {immortal.id} >
                    <h4>{immortal.name}</h4>
                    <p> {immortal.description}</p>
                </div>
            </li>
        )
}

export default ImmortalSummary
