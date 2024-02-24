import { useQuery } from '@tanstack/react-query';
import { requestEmployeeById } from '@utils';

export const useRequestEmployeeQueryById = ({ id }: EmployeeByIdParams) =>
  useQuery({
    queryKey: ['id', id],
    queryFn: () => requestEmployeeById({ id })
  });
