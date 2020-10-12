import React from 'react'
import ResourceSummary from './ResourceSummary'

const ResourceList =({resources}) => {
    let listStyle = {
        listStyleType: "none",
        padding: '5px',  
    }
    if (resources && resources.length >=1){
        return (
            <div>
                <h3>List of Resources</h3>
                <ul style= {listStyle}>
                    {resources && resources.map(resource => {
                        return (
                            <ResourceSummary resource  = {resource } key={resource.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return ( <h3>No Resources </h3>)
    }
}

export default ResourceList
