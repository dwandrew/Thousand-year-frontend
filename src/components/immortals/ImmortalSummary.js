import React from 'react'

import { Link } from 'react-router-dom'

export const ImmortalSummary = ({immortal}) => {

        return (
            <li>
                <Link to={"/immortals/" + immortal.id}>
                <div key= {immortal.id} className="immortal-card">
                <h4 className = "immortal-name"> {immortal.name}</h4>
                <p className = 'immortal-description'> {immortal.description}</p>
                </div>
                </Link>
            </li>
        )
}




export default ImmortalSummary
