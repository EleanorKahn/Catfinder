const express = require('express');
const cors = require("cors");

const app = express();
const port = 8085;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const corsOpt = {
    origin: 'https://api.petfinder.com/v2/',
    optionsSuccessStatus: 200,
}


