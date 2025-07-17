export const config = {
  baseUrl: 'https://www.shohoz.com',
  apiBaseUrl: 'https://api.shohoz.com',
  timeouts: {
    pageLoad: 30000,
    apiRequest: 15000,
  },
  testRetries: 2,
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
};