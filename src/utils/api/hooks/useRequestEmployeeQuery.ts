import { useInfiniteQuery } from '@tanstack/react-query';
import { requestEmployee } from '@utils';

const EMPLOYEE_COUNT = 10;

export const useRequestEmployeeQuery = (params: EmployeeParams) =>
  useInfiniteQuery({
    queryKey: ['employees', params],
    queryFn: ({ pageParam }) =>
      requestEmployee({ ...params, page: pageParam, count: EMPLOYEE_COUNT }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.length ? allPages.length + 1 : undefined;
    }
  });
