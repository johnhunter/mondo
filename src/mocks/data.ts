import type { PostData } from '@/types';

const data: PostData[] = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  },
];

// Note: structuredClone may not be supported in node workers
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
const clone = <T>(obj: T) =>
  typeof globalThis.structuredClone === 'function'
    ? structuredClone(obj)
    : (JSON.parse(JSON.stringify(obj)) as T);

export const posts = (count?: number): PostData[] =>
  clone(data.slice(0, count));

export const postById = (id = 1): PostData | undefined =>
  clone(data.find((p) => p.id === id));
