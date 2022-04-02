import { actionTypes, SheetAction } from './actions'

type SheetState = SheetGlobal.SheetState

export const initialState: SheetState = {
  sheetData: null,
  isLoading: false,
  errors: [],
}

export const reducers = (state: SheetState = initialState, action: SheetAction): SheetState => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.GET_SHEET_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: [],
      }
    case actionTypes.GET_SHEET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: [],
        ...payload,
      }
    case actionTypes.GET_SHEET_FAILURE:
      return {
        ...state,
        isLoading: false,
        ...payload,
      }
    default:
      return state
  }
}
