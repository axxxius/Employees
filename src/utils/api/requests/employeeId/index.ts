import { api } from '@utils';

export const requestEmployeeById = async ({ id }: EmployeeByIdParams) => {
  const { data } = await api.get<EmployeeCompany>(`/Employee/${id}`);
  return data;
};
