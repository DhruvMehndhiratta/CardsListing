import types from '../types';
import store from '../store';
import {
  getListingAPI,
  getDetailItemAPI
} from '../api/getListingAPI';
const { dispatch } = store;

export function getListing() {
  dispatch({
    type: types.GET_LISTING
  })

  return new Promise((response, rej) => getListingAPI()
    .then(res => {
      dispatch({
        type: types.GET_LISTING_SUCCESS,
        payload: res
      })
      return response(res)
    })
    .catch(err => {
      dispatch({
        type: types.GET_LISTING_FAILED
      })
      return rej(err)
    })
  )
}


export function getDetail(id) {
  dispatch({
    type: types.GET_DETAIL_ITEM
  })

  return new Promise((response, rej) => getDetailItemAPI(id)
    .then(res => {
      dispatch({
        type: types.GET_DETAIL_ITEM_SUCCESS,
        payload: res
      })
      return response(res)
    })
    .catch(err => {
      dispatch({
        type: types.GET_DETAIL_ITEM_FAILED
      })
      return rej(err)
    })
  )
}