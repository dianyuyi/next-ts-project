import { actionTypes, ItemAction } from "./actions";

type ItemState = ItemGlobal.ItemState;

export const initialState: ItemState = {
  productItem: null,
  isLoading: false,
  errors: [],
};

export const reducers = (
  state: ItemState = initialState,
  action: ItemAction
): ItemState => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: [],
      };
    case actionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: [],
        ...payload,
      };
    case actionTypes.GET_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        ...payload,
      };
    default:
      return state;
  }
};
