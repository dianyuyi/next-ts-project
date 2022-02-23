import { call, put } from 'redux-saga/effects'
import { getItemApi } from 'server/api/item'

import { getItemSuccess, getItemFailure, getItemRequestAction } from '..'

export function* updateItemRequest({ payload }: getItemRequestAction) {
  const { id } = payload
  try {
    const data = yield call(getItemApi, id)
    yield put(getItemSuccess({ productItem: data.data.item }))
  } catch (errors) {
    yield put(getItemFailure({ errors }))
  }
}
