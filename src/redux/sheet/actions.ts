import { GetSheetRequestPayload, GetSheetSuccessPayload, GetSheetFailurePayload } from './types'

// eslint-disable-next-line
export enum actionTypes {
  GET_SHEET_REQUEST = 'user/GET_SHEET_REQUEST',
  GET_SHEET_SUCCESS = 'user/GET_SHEET_SUCCESS',
  GET_SHEET_FAILURE = 'user/GET_SHEET_FAILURE',
}

export interface getSheetRequestAction {
  type: typeof actionTypes.GET_SHEET_REQUEST
  payload: GetSheetRequestPayload
}

interface getSheetSuccessAction {
  type: typeof actionTypes.GET_SHEET_SUCCESS
  payload: GetSheetSuccessPayload
}
interface getSheetFailureAction {
  type: typeof actionTypes.GET_SHEET_FAILURE
  payload: GetSheetFailurePayload
}

export type SheetAction = getSheetRequestAction | getSheetSuccessAction | getSheetFailureAction

export const getSheetRequest = (sheetName: GetSheetRequestPayload): SheetAction => ({
  type: actionTypes.GET_SHEET_REQUEST,
  payload: sheetName,
})

export const getSheetSuccess = (sheetData: GetSheetSuccessPayload): SheetAction => ({
  type: actionTypes.GET_SHEET_SUCCESS,
  payload: sheetData,
})

export const getSheetFailure = (errors: GetSheetFailurePayload): SheetAction => ({
  type: actionTypes.GET_SHEET_FAILURE,
  payload: errors,
})
