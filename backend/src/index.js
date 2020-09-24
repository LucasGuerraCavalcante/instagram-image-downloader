const express = require('express');
const cors = require('cors');

const routes = require ('./routes');

const app = express();

app.use(cors());

app.use(routes);

const port = 3333;

app.listen(port, function() {
    console.log(`\nServer listening on http://localhost:${port}/`);
});