import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'


const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    
    if(inputValue.length !== 0){
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ''

  }

  return (
    <div className='home'>
      <img className='img-Home' src="/image/pokedex.png" alt="" />
      <h1>Hi Trainer!</h1>
      <p>To Start give me your trainer name</p>
      <form onSubmit={handleSubmit}>
        <input id='name' type="text" placeholder='Your Name' />
        <button>Catch them all</button>
      </form>
    </div>
  )
}

export default Home