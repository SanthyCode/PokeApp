import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPoke from './StatPoke'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({ url}) => {

    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect( () => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    },[])

    const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    <div onClick={handleClick} className={`card border-${pokemon?.types[0].type.name}`}>
        <header className={`bg-${pokemon?.types[0].type.name}`}>
            <img className='img-pokemon' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div className='body'>
        <section className='pokemon-name'>
            <h3>{pokemon?.name}</h3>
            <ul className='type'>
            {
                pokemon?.types.map(slot =>(
                    <li key={slot.type.url}>{slot.type.name}</li>
                ))
            }
            </ul>
            <hr />
        </section>
        <footer className='stat'>
            <ul className='infoStat'>
                {
                    pokemon?.stats.map(stat => (
                        <StatPoke
                        key={stat.stat.url}
                        infoStat={stat}
                        />
                    ))
                }
            </ul>
        </footer>
        </div>

    </div>
  )
}

export default PokemonCard