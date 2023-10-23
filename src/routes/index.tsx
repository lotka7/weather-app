import { Navigate, useRoutes } from 'react-router-dom';
import CitiesList from '../pages/CitiesList';
import CityAdd from '../pages/CityAdd';
import CityWeather from '../pages/CityWeather';

export default function Router(): React.ReactElement | null {
  return useRoutes([
    {
      path: '/',
      element: <CitiesList />,
      index: true,
    },
    {
      path: 'cities',
      children: [
        { path: '', element: <CitiesList /> },
        { path: 'add', element: <CityAdd /> },
        { path: ':name', element: <CityWeather /> },
      ],
    },
    {
      path: '*',
      children: [
        { path: '404', element: <h1>404</h1> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
  ]);
}
