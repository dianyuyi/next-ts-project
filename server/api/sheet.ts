import { getSheetList } from 'src/utils/sheet'

// export const getItemApi = (id: string): Promise<AxiosResponse<SheetGlobal.Works>> =>
//   axios.get(`/item/${id}`).then(response => {
//     return response.data
//   })

export const getSheetApi = async (sheetName: string) => {
  const data = await getSheetList(sheetName)
  console.log('call', data)
  return data
}
