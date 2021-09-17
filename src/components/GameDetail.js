import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { smallImage } from '../util'

// Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// images
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathID }) => {
  const history = useHistory()

  // exit detail
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/')
    }
  }

  //star logic
  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' src={starFull} key={i} />)
      } else {
        stars.push(<img alt='star' src={starEmpty} key={i} />)
      }
    }
    return stars
  }

  // get platform images
  const getPlatformImages = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'Nintendo Switch':
        return nintendo
      case 'Xbox One':
        return apple
      case 'PC':
        return steam
      case 'IOS':
        return apple
      default:
        return gamepad
    }
  }

  const { screen, game, isLoading } = useSelector((state) => state.detail)
  return (
    <>
      {!isLoading && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p> Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      src={getPlatformImages(data.platform.name)}
                      key={data.platform.id}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <motion.img
                layoutId={`image ${pathID}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>

            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screen.results.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  alt={screenshot.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`

const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1rem;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`

export default GameDetail
