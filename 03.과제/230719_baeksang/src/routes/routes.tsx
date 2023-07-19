import { RouteObject, useRoutes } from 'react-router-dom';

import { About } from '@/pages/About';
import { Candidate } from '@/pages/Candidate';
import { Home } from '@/pages/Home';
import { Notice } from '@/pages/Notice';
import { Replay } from '@/pages/Replay';
import { Winners } from '@/pages/Winners';

export const routes: RouteObject[] = [
  // 첫 화면 (/)
  {
    path: '/',
    // 내용을 렌더링할 컴포넌트로, 반드시 import 필요
    element: <Home />,
  },
  // 시상식 소개
  {
    path: 'about',
    element: <About />,
  },
  // 59회 수상자, 작품
  {
    path: 'candidate',
    element: <Candidate />,
  },
  // 다시보기
  {
    path: 'replay',
    element: <Replay />,
    children: [
      {
        path: ':awards_id',
        element: <Replay />,
      },
    ],
  },
  // 역대 수상자
  {
    path: 'winners',
    element: <Winners />,
  },
  // 공지사항
  {
    path: 'notice',
    element: <Notice />,
  },
];

export const RoutesComponent = () => {
  const element = useRoutes(routes);

  return element;
};
