declare namespace Store {
  interface State {
    user: UserGlobal.UserState
    item: ItemGlobal.ItemState
    sheet: SheetGlobal.SheetState
  }
  type RootState = State
}
