const express = require("express");
const app = express();

const PORT = 3001;

app.get('/test', (req, res) => {
  return res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
