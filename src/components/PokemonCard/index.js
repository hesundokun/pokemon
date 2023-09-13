import React from 'react'

import './style.scss'

const PokemonCard = ({ id, name, imageUrl, types, pokemon, onClick }) => {
  console.log('Pokemon Details', pokemon)

  const handleClickPokemonCard = () => {
    onClick(pokemon)
  }

  return (
    <div
      className={`card-container ${types[0]}`}
      onClick={handleClickPokemonCard}
    >
      <div className='pokemon-id'>{`#${id}`}</div>
      <div className='pokemon-name-types'>
        <h2>{name}</h2>
        <ul>
          {(types || []).map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div className='pokemon-image'>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  )
}

export default PokemonCard
