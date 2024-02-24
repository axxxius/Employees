interface EmployeeParams {
  page?: number;
  count?: number;
  name?: string;
  gender?: string;
  position?: string;
  stack?: string;
}

interface EmployeeByIdParams {
  id: string | undefined;
}
