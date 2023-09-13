import React, { useEffect, useState } from 'react'

import './assets/Styles/index.scss'

import Pagination from './components/Pagination'
import PokemonCard from './components/PokemonCard'
import { fetchPokemonApi } from './apis'
import Loading from './components/Loading'

const App = (props) => {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPokemon = async () => {
    setIsLoading(true)

    setTimeout(async () => {
      const pokemonResult = await fetchPokemonApi()
      setIsLoading(false);
      setPokemonList(pokemonResult)
    }, 2 * 1000)

  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div className='pokemon-app'>
      <header>
        <h1>Pokemon</h1>
        <Pagination />
      </header>

      {isLoading && <Loading />}

      <main>
        {(pokemonList?.results || []).map((pokemon) => (
          <PokemonCard key={pokemon?.id} {...pokemon} />
        ))}
      </main>
    </div>
  )
}

export default App
