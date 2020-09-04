const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://production-url.now.sh'
    : 'http://localhost:3000';

export default baseUrl;
