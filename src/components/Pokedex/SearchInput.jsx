import React from 'react'

const SearchInput = ({ setPokeSearch, setOptionType }) => {



  const handleSubmint = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ''

  }

  return (
    <form className='form' onSubmit={handleSubmint}>
      <input id='searchText' type="text" placeholder='Search Pokemon' />
      <button className='form-btn'>Search</button>
    </form>
  )
}

export default SearchInput
