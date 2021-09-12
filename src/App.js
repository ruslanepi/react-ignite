import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  })

  return <div>App</div>
}

export default App
