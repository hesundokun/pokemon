import React from 'react'

import './style.scss'

import { POKEMON_CARD_BG_COLOR } from '../../constants'

const PokemonDetail = (props) => {
  const { isShowPokemonDetail, setShowDetails, id, imageUrl, name, types } =
    props
  return (
    <div
      className={`details-view-container ${
        isShowPokemonDetail ? 'show' : 'hide'
      }`}
      style={{ backgroundColor: POKEMON_CARD_BG_COLOR[types[0]] }}
    >
        <div className='back-button' onClick={() => setShowDetails(false)} />

      <div className='info-container'>
        <div className='pokemon-name-types'>
          <span className='pokemon-id'>{`#${id}`}</span>
          <span className='card-title'>
            <h2>{name}</h2>
            <div className='pokemon-types'>
              {(types || []).map((type) => (
                <span className='type' key={type}>
                  {type}
                </span>
              ))}
            </div>
          </span>
        </div>
      </div>

      <div className='details'>
        <img className='pokemon-image' src={imageUrl} alt={name} />

        <div className='tabs-switch-container'>
          <button className='tab-switch active'>About</button>
          <button className='tab-switch'>Base Stats</button>
          <button className='tab-switch'>Evolution</button>
        </div>

        <div className='tab'>
          <table className='pokemon-table'>
            <tbody>
              <tr>
                <td>Species</td>
                <td>bug, poison</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>60cm</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>10kg</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>shed skin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
