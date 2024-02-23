import { api } from '@utils';

interface RequestEmployeeParams {
  page?: number;
  count?: number;
  name?: string;
  gender?: string;
  position?: string;
  stack?: string;
}

// export const requestEmployee = async (params: RequestEmployeeParams) => {
//   const { data } = await api.get('/Employee', {
//     params
//   });
//   console.log(data);
//
//   return data;
// };

export const requestEmployee = async (params: RequestEmployeeParams) =>
  await api.get('/Employee', { params });
