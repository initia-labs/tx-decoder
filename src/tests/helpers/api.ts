import axios from "axios";

export type MockedAxios = jest.Mocked<typeof axios>;

export interface MockApiResponses {
  GET?: { [url: string]: unknown };
  POST?: { [url: string]: unknown };
}

export const mockedAxios = axios as MockedAxios;

export const setupMockApi = (
  mockedAxios: MockedAxios,
  responses: MockApiResponses
) => {
  const { get, post } = createMockApiHandlers(responses);
  mockedAxios.get.mockImplementation(get);
  mockedAxios.post.mockImplementation(post);
};

export const resetMockApi = (mockedAxios: MockedAxios) => {
  mockedAxios.get.mockReset();
  mockedAxios.post.mockReset();
};

export const createMockApiHandlers = (responses: MockApiResponses) => {
  const getPath = (url: string) => {
    const urlObject = new URL(url);
    return urlObject.pathname;
  };

  const getHandler = (url: string) => {
    const path = getPath(url);
    if (responses.GET && responses.GET[path]) {
      return Promise.resolve({ data: responses.GET[path] });
    }
    return Promise.reject(
      new Error(`[Mock API] Unhandled GET request to: ${url}`)
    );
  };

  const postHandler = (url: string, data?: unknown) => {
    const path = getPath(url);
    const postMocks = responses.POST?.[path];

    if (postMocks) {
      if (Array.isArray(postMocks)) {
        const matchedMock = postMocks.find(
          (mock) => JSON.stringify(mock.payload) === JSON.stringify(data)
        );

        if (matchedMock) {
          return Promise.resolve({ data: matchedMock.response });
        }

        return Promise.reject(
          new Error(
            `[Mock API] Unhandled POST payload for ${url}: ${JSON.stringify(
              data
            )}`
          )
        );
      }
      // Fallback for simple POST mocks that don't need payload checking
      return Promise.resolve({ data: postMocks });
    }

    return Promise.reject(
      new Error(`[Mock API] Unhandled POST request to: ${url}`)
    );
  };

  return {
    get: getHandler,
    post: postHandler,
  };
};
