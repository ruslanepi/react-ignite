import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
// components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
// styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Home = () => {
  //get current location
  const location = useLocation()
  const pathID = location.pathname.split('/')[2]

  // fetch games
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  //get data back

  const { popular, newGames, upcoming } = useSelector((state) => state.games)

  return (
    <GameList>
      {pathID && <GameDetail />}

      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game, index) => {
          return <Game key={index} {...game} />
        })}
      </Games>
      <h2>new games</h2>
      <Games>
        {newGames.map((game, index) => {
          return <Game key={index} {...game} />
        })}
      </Games>
      <h2>popular games</h2>
      <Games>
        {popular.map((game, index) => {
          return <Game key={index} {...game} />
        })}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
export default Home
