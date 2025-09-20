import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Info from '../pages/Info';
import About from '../pages/About';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Info',
        element:<Info/>
      },
      {
        path:'/About',
        element:<About/>
      },
    ]
  }
]);

export default router;