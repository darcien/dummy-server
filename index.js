const express = require('express');

let server = express();

server.listen(8080, () => {
  console.log('Server listening on', 8080);
});
