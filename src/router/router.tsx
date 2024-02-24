import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components';
import { EmployeeProfilePage, EmployeesPage } from '@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTES, ThemeProvider } from '@utils';

const client = new QueryClient();

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </QueryClientProvider>
    ),
    children: [
      {
        path: ROUTES.MAIN,
        element: <EmployeesPage />
      },
      {
        path: ROUTES.EMPLOYEE_ID,
        element: <EmployeeProfilePage />
      }
    ]
  }
]);
