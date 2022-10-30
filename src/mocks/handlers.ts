import { rest } from 'msw';
import { API_ROOT } from '../api/api';
import { posts, postById } from './data';

export const url = (route: string) => `${API_ROOT}${route}`;

export const handlers = [
  rest.get(url('posts'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts(2)));
  }),
  rest.get(url('posts/:id'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postById(Number(req.params.id))));
  }),
];
