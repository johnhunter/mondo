export const API_ROOT = 'https://jsonplaceholder.typicode.com/';
export type HttpError = Partial<Response> & {
  status: number;
  statusText: string;
};

type FetchArgs = Parameters<typeof globalThis.fetch>;

/**
 * Augments native fetch with error handling and typed response data.
 */
export const fetch = async <RData = unknown>(
  input: FetchArgs[0],
  init: FetchArgs[1] = {},
) => {
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
    const status = 0;
    const statusText: string =
      (err as Error)?.message || 'Failed to fetch (unknown error)';
    return Promise.reject<HttpError>({ status, statusText });
  }

  if (res.ok) {
    return resJson;
  } else {
    return Promise.reject<HttpError>(res);
  }
};

export const getJson = <RData = unknown>(path: string) =>
  fetch<RData>(`${API_ROOT}${path}`);
