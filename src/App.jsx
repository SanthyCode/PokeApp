import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'

function App() {
  
  return (
    <Routes >

      <Route path='/' element={<Home />} />

      <Route element={<ProtectedRoutes />}>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:name' element={<PokemonDetails />} />

      </Route>

    </Routes>
  )
}

export default App