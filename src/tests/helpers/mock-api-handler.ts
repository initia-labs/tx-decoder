export const createMockApiHandler = (
  urlResponseMap: Record<string, unknown>
) => {
  return (url: string) => {
    try {
      const urlObject = new URL(url);
      const endpointPath = urlObject.pathname;

      const responseData = urlResponseMap[endpointPath];
      if (responseData) {
        const mockResponse = { data: responseData, status: 200 };
        return Promise.resolve(mockResponse);
      }

      return Promise.reject(
        new Error(`[Mock API] No mock response found for path: ${endpointPath}`)
      );
    } catch (error) {
      return Promise.reject(
        new Error(`[Mock API] Invalid URL provided: ${url}, ${error}`)
      );
    }
  };
};
