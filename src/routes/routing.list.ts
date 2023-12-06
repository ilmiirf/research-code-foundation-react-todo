import { type RouteType } from '@/types/routeType';
import { createElement, lazy } from 'react';

export const routingList: RouteType[] = [
  {
    label: 'Home',
    element: createElement(
      lazy(async () => await import('@/views/home-page/Home')),
    ),
    path: '/',
  },
  {
    label: 'Todo',
    element: createElement(
      lazy(async () => await import('@/views/todo-page/TodoPage')),
    ),
    path: '/todo',
  },
];
