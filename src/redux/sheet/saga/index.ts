import { call, put } from 'redux-saga/effects'
import { getSheetList } from 'src/utils/sheet'

import { getSheetSuccess, getSheetFailure, getSheetRequestAction } from '..'

export function* updateSheetRequest({ payload }: getSheetRequestAction) {
  const { sheetName } = payload
  try {
    console.log('start?')
    const data = yield call(getSheetList, sheetName)
    console.log('call?')
    yield put(getSheetSuccess({ sheetData: data }))
  } catch (errors) {
    yield put(getSheetFailure({ errors }))
  }
}
