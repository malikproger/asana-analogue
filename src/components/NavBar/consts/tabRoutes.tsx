import { FaTasks } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';

export const tabRoutes = [
  {
    title: 'Главная',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    title: 'Мои задачи',
    path: '/tasks',
    icon: <FaTasks />,
  },
];
