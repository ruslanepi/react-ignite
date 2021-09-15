const base_url = 'https://api.rawg.io/api/'
//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//popular games
const popular_games = `games?key=b521818db2ba4cf1938be4360e1f5b26&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=b521818db2ba4cf1938be4360e1f5b26&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=b521818db2ba4cf1938be4360e1f5b26&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

// Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=b521818db2ba4cf1938be4360e1f5b26`

// Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=b521818db2ba4cf1938be4360e1f5b26`
