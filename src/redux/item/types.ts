export interface GetItemRequestPayload {
  id: ItemGlobal.Item['id']
}

export interface GetItemSuccessPayload {
  productItem: ItemGlobal.Item
}

export interface GetItemFailurePayload {
  errors: Errors
}

export type Payload = GetItemRequestPayload | GetItemSuccessPayload | GetItemFailurePayload
