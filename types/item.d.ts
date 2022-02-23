declare namespace ItemGlobal {
  interface Item {
    id: string
    name: string
    description: string
    images: Array<string>
    thumbnail: string
    status: string
    updated_at: string
    created_at: string
    price: {
      jp: number
      tw: number
    }
    displayPrice: {
      jp: string
      tw: string
    }
    category: {
      id: string
      name: string
    }
    condition: {
      id: string
      name: string
    }
    shippingPayer: {
      code: string
      name: string
    }
    seller: {
      id: string
      name: string
      num_sell_items: string
      ratings: {
        good: string
        normal: string
        bad: string
      }
    }
  }

  interface ItemState {
    productItem: Item | null
    isLoading: boolean
    errors: Errors
  }
}
