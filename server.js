const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./public/routes/apiroutes.js')(app);
require('./public/routes/htmlroutes.js')(app);
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});