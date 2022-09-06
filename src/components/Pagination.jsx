import axios from 'axios'
import React from 'react'

const Pagination = ({setPokemons, pokemons }) => {


  const next = () => {

    axios.get(pokemons.next)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
}    
const prev = () => {
    if(!pokemons.previous) return

    axios.get(pokemons?.previous)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
}
 
    
  return (
    <div className='btn_footer'>
        <button className='btn-next-prev' onClick={prev}>«</button> 
        <button className='btn-next-prev' onClick={next}>»</button>
        
    </div>
  )
}

export default Pagination