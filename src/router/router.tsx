import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components';
import { EmployeesPage } from '@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@utils';

const client = new QueryClient();

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    ),
    children: [
      {
        path: '/',
        element: <EmployeesPage />
      }
    ]
  }
]);
