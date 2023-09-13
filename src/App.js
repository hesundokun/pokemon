import React, { useEffect, useState } from 'react'

import './assets/Styles/index.scss'

import Pagination from './components/Pagination'
import PokemonCard from './components/PokemonCard'
import { fetchPokemonApi } from './apis'
import Loading from './components/Loading'
import PokemonDetail from './components/PokemonDetail'

const App = (props) => {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [isShowPokemonDetail, setShowDetails] = useState(false)

  const fetchPokemon = async () => {
    setIsLoading(true)

    setTimeout(async () => {
      const pokemonResult = await fetchPokemonApi()
      setIsLoading(false)
      setPokemonList(pokemonResult)
    }, 2 * 1000)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const handleSetSelectedPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
    setShowDetails(!isShowPokemonDetail)
  }

  return (
    <div>
      <div className='pokemon-app'>
        <header>
          <h1>Pokemon</h1>
          <Pagination />
        </header>

        {isLoading && <Loading />}

        <main>
          {(pokemonList?.results || []).map((pokemon) => (
            <PokemonCard
              key={pokemon?.id}
              {...pokemon}
              pokemon={pokemon}
              onClick={handleSetSelectedPokemon}
            />
          ))}
        </main>
      </div>

      {selectedPokemon && isShowPokemonDetail && (
        <>
        <div className='overlay' />
          <PokemonDetail
          {...selectedPokemon}
          isShowPokemonDetail={isShowPokemonDetail}
          setShowDetails={setShowDetails}
        />
        </>
      )}
    </div>
  )
}

export default App
