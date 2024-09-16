const express = require('express');
const colors = require('colors');
const app = express();
const PORT = 3000;
const dbConnect = require('./db');

dbConnect();




// app.listen(PORT, () => {
//     console.log(colors.rainbow(`app is listening on the PORT: ${PORT}`))
// })
dbConnect()