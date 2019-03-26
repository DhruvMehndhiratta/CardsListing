import types from '../types';


let initState = {
  fetching: false,
  data: [],
  detailObject:{}
}

export default function (state = initState, action) {

  switch (action.type) {

    case types.GET_LISTING:
      return {
        ...state,
        fetching: true
      }
    
    case types.GET_LISTING_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: [...action.payload.data]
      }
    
    case types.GET_LISTING_FAILED:  
      return {
        ...state,
        fetching: false
      }
    
    
    case types.GET_DETAIL_ITEM:
      return {
        ...state,
        fetching: true
      }

    case types.GET_DETAIL_ITEM_SUCCESS:
      return {
        ...state,
        fetching: false,
        detailObject:{...action.payload}
        
      }

    case types.GET_DETAIL_ITEM_FAILED:
      return {
        ...state,
        fetching: false
      }
    
    default:
      return state;
  }
}