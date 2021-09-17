import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
import { popup } from '../animations'

const Game = ({ name, released, background_image, id }) => {
  const stringPathId = id.toString()
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    dispatch(loadDetail(id))
  }

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>game: {name}</motion.h3>
        <p>Released date: {released}</p>
        <motion.img
          layoutd={`image ${stringPathId}`}
          src={background_image}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
