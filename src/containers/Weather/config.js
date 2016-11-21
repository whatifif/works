const environment = {
  development: {
    isProduction: false,
    host: 'localhost',
    port: 3000
  },
  production: {
    isProduction: true,
    host: '13.54.49.146',
    port: 80
  }
}[process.env.NODE_ENV || 'development'];

export default environment;


