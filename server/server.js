const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`api server running on port http://localhost:${port}`));
