import { GetItemRequestPayload, GetItemSuccessPayload, GetItemFailurePayload } from './types'

// eslint-disable-next-line
export enum actionTypes {
  GET_ITEM_REQUEST = 'user/GET_ITEM_REQUEST',
  GET_ITEM_SUCCESS = 'user/GET_ITEM_SUCCESS',
  GET_ITEM_FAILURE = 'user/GET_ITEM_FAILURE',
}

export interface getItemRequestAction {
  type: typeof actionTypes.GET_ITEM_REQUEST
  payload: GetItemRequestPayload
}

interface getItemSuccessAction {
  type: typeof actionTypes.GET_ITEM_SUCCESS
  payload: GetItemSuccessPayload
}
interface getItemFailureAction {
  type: typeof actionTypes.GET_ITEM_FAILURE
  payload: GetItemFailurePayload
}

export type ItemAction = getItemRequestAction | getItemSuccessAction | getItemFailureAction

export const getItemRequest = (id: GetItemRequestPayload): ItemAction => ({
  type: actionTypes.GET_ITEM_REQUEST,
  payload: id,
})

export const getItemSuccess = (productItem: GetItemSuccessPayload): ItemAction => ({
  type: actionTypes.GET_ITEM_SUCCESS,
  payload: productItem,
})

export const getItemFailure = (errors: GetItemFailurePayload): ItemAction => ({
  type: actionTypes.GET_ITEM_FAILURE,
  payload: errors,
})
