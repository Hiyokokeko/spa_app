import axios from 'axios';
import { foodsIndex } from '../urls/index'

export const fetchFoods = (restaurantID) => {
  return axios.get(foodsIndex(restaurantID))
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}
