import { api } from '../../instance.ts';

interface FetchEmployeesParams {
  page?: number;
  count?: number;
  name?: string;
  gender?: string;
  position?: string;
  stack?: string;
}

export const requestEmployee = async (params: FetchEmployeesParams) => {
  const { data } = await api.get('/Employee', {
    params
  });

  return data;
};
