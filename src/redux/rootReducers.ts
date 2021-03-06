import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as user from 'src/redux/user'
import * as item from 'src/redux/item'
import * as sheet from 'src/redux/sheet'
import { UserAction } from './user/actions'

const rootReducer = combineReducers({
  user: user.reducers,
  item: item.reducers,
  // sheet: sheet.reducers,
})

export type RootAction = UserAction

const reducer = (state, action): Store.RootState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    default:
      return rootReducer(state, action)
  }
}

export default reducer
