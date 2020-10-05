import React from 'react'

export const ImmortalDetails = (props) => {
    const id = props.match.params.id
        return (
            <div>
                <h3>Immortal Name</h3>
                <h4>{id}</h4>
                <ul>
                    <li>Skills</li>
                    <li>Characters</li>
                    <li>Marks</li>
                    <li>Resources</li>
                    <li>
                        <div>Memories
                            <ol>
                                <li>Experience 1</li>
                                <li>Experience 2</li>
                                <li>Experience 3</li>
                            </ol>
                        </div></li>
                    <li>Journal</li>
                </ul>
                
            </div>
        )
}

export default ImmortalDetails
