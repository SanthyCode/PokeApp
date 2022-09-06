import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import './../styles/details.css'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()
  const { name } = useParams()


  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`

    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))

  }, [])

  console.log(pokeInfo)

  return (
    <section >
      <Header />
      <div className='container container-detail'>
        <header className={`bg-details-${pokeInfo?.types[0].type.name} 'details'`}>
          <div >
          <img className='img_details' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={name} />
          </div>
          <h2> #{pokeInfo?.id}</h2>
          <h2 className='name-detail'>{name}</h2>
          <section>
            <div className='dimensions'>
              <div className='dimensions__column'>
                <h2 className='dimensions__title'>Weight</h2>
                <span className='dimensions__value'>{pokeInfo?.weight}</span>
              </div>
              <div className='dimensions__column'>
                <h2 className='dimensions__title'>Height</h2>
                <span className='dimensions__value'>{pokeInfo?.height}</span>
              </div>


            </div>
          </section>
        </header>
        <article>
          <div className='dimensions-abst'>
            <div className='dimensions-column'>
              <h2>Abilities</h2>

              <ul>
                {
                  pokeInfo?.abilities.map((type, i) => (
                    <li className='ab-value' key={'type-' + i}>{type.ability.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className='dimensions-column'>
              <h2>Type</h2>
              <ul>
                {
                  pokeInfo?.types.map((slot, i) => (
                    <li className='st-value' key={'slot-' + i}>{slot.type.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </article>
        <div>
          <h2>Stats</h2>
          <ul className='stats_detail'>
            {
              pokeInfo?.stats.map((stat, i) => (
                <li   key={'stat-' + i} >{stat.stat.name}:     <span>{stat.base_stat}/100</span> <div style={{backgroundColor: 'orange', width: `${stat.base_stat}%`, height: '25px' }}></div></li>
                
              ))
            }
          </ul>
        </div>
        <div>
          <h2>Movements</h2>
          <ul className='move_details'>
            {
              pokeInfo?.moves.slice(0, 20).map((wer, i) => (
                <li className='move-inf' key={'wer-' + i}>{wer.move.name} <br /></li>

              ))
            }
          </ul>
        </div>

      </div>
    </section>
  )
}

export default PokemonDetails