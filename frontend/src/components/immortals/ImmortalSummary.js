import React from 'react'

import { Link } from 'react-router-dom'

export const ImmortalSummary = ({immortal}) => {

        return (
            <li>
                <div key= {immortal.id} className="immortal-card">
                <h4><Link to={"/immortals/" + immortal.id}> {immortal.name}</Link></h4>
                    <p> {immortal.description}</p>
                </div>
            </li>
        )
}




export default ImmortalSummary
