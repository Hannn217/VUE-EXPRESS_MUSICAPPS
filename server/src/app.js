const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = 1234;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
    res.send({
        "message": "hallo"
    })
});

// port
app.listen(port, () => {
    console.log(`Server sedang berlari-lari di port ${port}`);
});
