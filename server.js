const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const PORT = 4001 || process.env.PORT;

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Database connected successful!'))
  .catch((err) => console.log('Database is not concocted to the server, you are offline:', err));

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
