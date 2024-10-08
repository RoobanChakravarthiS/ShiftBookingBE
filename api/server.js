import Hapi from 'hapi';

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: '8080',
  routes: {
            cors: {
                origin: ['*'], // Change this line to an array
            },
        },
});

async function main() {
  await server.register([{
    plugin: require('./shifts-mock-api'),
    routes: { prefix: '/shifts' },
  }]);

  await server.start();

  console.info(`✅  API server is listening at ${server.info.uri.toLowerCase()}`);
}

main();
