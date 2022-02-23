import { all, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects'

import { actionTypes as userActions } from 'src/redux/user/actions'
import { actionTypes as itemActions } from 'src/redux/item/actions'
import { updateProfileRequest } from 'src/redux/user/saga'
import { updateItemRequest } from 'src/redux/item/saga'

function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([
    takeLatest(userActions.GET_PROFILE_REQUEST, updateProfileRequest),
    takeLatest(itemActions.GET_ITEM_REQUEST, updateItemRequest),
  ])
}

export default rootSaga
