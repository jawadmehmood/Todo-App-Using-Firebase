import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './pages/Todo';
import Register from './pages/Register';
import Layout from './Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoutes from './components/ProtectedRoutes';
import Logout from './pages/Logout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'todo', element: <ProtectedRoutes component={<Todo />} /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'logout', element: <Logout /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);