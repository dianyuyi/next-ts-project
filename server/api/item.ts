import { AxiosResponse } from 'axios';
import request from 'src/utils/requesTest';

export const getItemApi = (
  id: string
): Promise<AxiosResponse<ItemGlobal.Item>> =>
  request.get(`/item/${id}`).then((response) => {
      return response.data;
  });
