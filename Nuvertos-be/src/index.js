const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

// app.use('', require('./routes'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});