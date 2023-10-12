//* LIB
import { useRoutes } from 'react-router-dom';

//* ROUTER
import OutLetChild from './OutLetChild';

//* IMPORT
import { HeaderLayout } from '@/imports/layout';
import {
  AboutPage,
  ContactPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  ToDoPage,
} from '@/imports/page';

const RouterPage = () => {
  let element = useRoutes([
    {
      path: '/',
      element: (
        <OutLetChild>
          <HeaderLayout />
        </OutLetChild>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/about-us',
          element: <AboutPage />,
        },
        {
          path: '/contact-us',
          element: <ContactPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/register',
          element: <RegisterPage />,
        },
        {
          path: '/todo',
          element: <ToDoPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
  return element;
};

export default RouterPage;
