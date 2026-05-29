const dotenv = require('dotenv');
// configure environment file
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;

// connection string
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
// connect mongodb
mongoose.connect(DB).then((con) => {
  console.log(con.connections);
  console.log('DB connection successful 🎉');
});

console.log(process.env.NODE_ENV);
// start to run server
app.listen(port, () => {
  console.log(`Server started listening ${port} ... ✅`);
});
