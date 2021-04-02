import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'

export const postLineFoods = (params) => {
  return axios.post(lineFoods, //POST: リソースの作成
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};

export const replaceLineFoods = (params) => {
  return axios.put(lineFoodsReplace, //PUT: リソースの作成、あるいは更新
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};

export const fetchLineFoods = () => {
  return axios.get(lineFoods)
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};
