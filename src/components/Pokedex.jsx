import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import Pagination from './Pagination'

const Pokedex = () => {
  
  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    if(optionType !== 'All'){
      // Aquí se hace la lógica de cuando el usuario quieres filtrar por tipo
      const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // Aquí se hace la lógica cuando el usuario busca por el input
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // Aquí se hace la lógica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])

  const nameUser = useSelector(state => state.nameTrainer)


  return (
    <div>
      <Header />
      <div className='container'>
        <h1><span className='title'>Welcome</span> {nameUser}, Catch'em All</h1>
        <div className='container-search'>
          <SearchInput
            setPokeSearch={setPokeSearch}
            setOptionType={setOptionType} 
          />
          <SelectType
           setOptionType={setOptionType}
           optionType= {optionType}
           setPokeSearch={setPokeSearch}
           />
        </div>
      </div>

      <div className='cards-container'>
        {
          pokemons?.results.map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
        <Pagination 
         pokemons={pokemons} // Logica para ir a la siguiente pagina
         setPokemons={setPokemons} // Logica para ir a la pagina antigua
         />
      
    </div>
  )
}

export default Pokedex