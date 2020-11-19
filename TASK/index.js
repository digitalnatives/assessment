// npm init - package.json
// npm install express --save - express
// git rm -r --cached node_modules
const express = require("express");

const app = express();
const PORT = process.env.port || 8080;
app.use(express.static(`./public`));

function listening() {
  console.info(`Server has started, so we are live on port ${PORT}`);
}

app.listen(PORT, listening());