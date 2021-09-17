import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
//redux and routes
import { fetchSearch } from '../actions/gamesAction'
import { useDispatch } from 'react-redux'
import { fadeIn } from '../animations'

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const searchGameHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitGameHandler = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }

  const clearSearchHandler = () => {
    dispatch({ type: 'CLEAR_SEARCHED' })
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={submitGameHandler} className='search'>
        <input onChange={searchGameHandler} type='text' value={textInput} />
        <button type='submit'>Search</button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`

export default Nav
