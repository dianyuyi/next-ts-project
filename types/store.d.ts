declare namespace Store {
  interface State {
    user: UserGlobal.UserState
    item: ItemGlobal.ItemState
  }
  type RootState = State
}
