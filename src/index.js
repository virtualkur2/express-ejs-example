const config = require('./config');
const server = require('./server/');

const app = server();

app.listen(config.PORT, () => {
  console.log('Server started');
});
