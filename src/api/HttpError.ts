const getErrorMessage = (response?: Response): string => {
  const fallbackMsg = 'an unknown error';

  if (!response) {
    return fallbackMsg;
  }

  const code = typeof response.status === 'number' ? response.status : '';
  const status = `${code} ${response.statusText || ''}`.trim();
  return status ? `status code ${status}` : fallbackMsg;
};

interface ErrorOptions {
  /**
   * Expect cause to be an Error instance
   */
  cause: Error;
}

/**
 * HttpError provides a single error class to handle all failure responses
 * from the fetch request.
 */
class HttpError extends Error {
  public status: number | undefined;

  constructor(response?: Response, options?: ErrorOptions) {
    let errorMsg = 'an unknown error';

    if (options?.cause.name === 'SyntaxError') {
      errorMsg = 'an invalid json response';
    } else {
      errorMsg = getErrorMessage(response);
    }

    super(`Request failed with ${errorMsg}`, options);

    this.name = 'HttpError';
    this.status = response?.status;
  }
}

export default HttpError;
