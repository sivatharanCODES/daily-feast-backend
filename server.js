const dotenv = require('dotenv');
// configure environment file
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = 3000;

console.log(process.env.NODE_ENV);
// start to run server
app.listen(port, () => {
  console.log(`Server started listening ${port} ... ✅`);
});
