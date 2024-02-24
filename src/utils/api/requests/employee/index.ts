import { api } from '@utils';

export const requestEmployee = async (params: EmployeeParams) =>
  await api.get('/Employee', { params });
