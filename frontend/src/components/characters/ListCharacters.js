import React from 'react'
import CharacterSummary from './CharacterSummary'

const CharacterList =({characters}) => {
    if (characters && characters.length >= 1){
        return (
            <div>
                <h3>List of Characters</h3>
                <ul>
                    { characters && characters.map(character => {
                        return (
                            <CharacterSummary character = {character} key={character.id} />
                        )
                    })}   
                </ul>
            </div>
        )}
    else {
        return (
            <h3>No Characters</h3>
        )
    }
}

export default CharacterList
