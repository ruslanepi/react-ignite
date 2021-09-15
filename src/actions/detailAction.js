import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id))
  const screenshotsData = await axios.get(gameScreenshotURL(id))
  console.log(screenshotsData)
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotsData.data,
    },
  })
}
