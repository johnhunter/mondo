import { rest } from 'msw';
import { API_ROOT } from '../api';

const url = (route: string) => `${API_ROOT}${route}`;

export const handlers = [
  rest.get(url('posts'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'test title 1',
          body: 'test body 1',
        },
        {
          userId: 1,
          id: 2,
          title: 'test title 2',
          body: 'test body 2',
        },
      ])
    );
  }),
];
