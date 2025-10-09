
const config = {
  development: {
    API_BASE_URL: 'http://localhost:3000'
  },
  production: {
    API_BASE_URL: 'https://geovisor-duero.onrender.com'
  }
};

const environment = import.meta.env.MODE || 'development';

export default config[environment];
