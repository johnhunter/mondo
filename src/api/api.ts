import HttpError from './HttpError';

export const API_ROOT = 'https://jsonplaceholder.typicode.com/';

type FetchArgs = Parameters<typeof globalThis.fetch>;

/**
 * Augments native fetch with error handling and typed response data.
 */
export const fetch = async <RData = unknown>(
  input: FetchArgs[0],
  init: FetchArgs[1] = {},
): Promise<RData> => {
  const initWithDefaults = {
    ...init,

    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  let res: Response;
  let resJson: RData;
  try {
    res = await globalThis.fetch(input, initWithDefaults);
    resJson = (await res.json()) as RData;
  } catch (err: unknown) {
    throw new HttpError(undefined, { cause: err as Error });
  }

  if (res.ok) {
    return resJson;
  } else {
    throw new HttpError(res);
  }
};

export const getJson = <RData = unknown>(path: string): Promise<RData> =>
  fetch<RData>(`${API_ROOT}${path}`);
