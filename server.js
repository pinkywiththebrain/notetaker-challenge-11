//requiring express, setting the local host, and setting express to the app variable
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//requiring in the routes to use
const htmlRoutes = require('./routes/html/index')
const notesRoutes = require('./routes/api/index')

//middleware for static files, parsing JSON, and urlencoded form data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting routes
app.use('/api', notesRoutes)
app.use('/', htmlRoutes)

//function to listen on specified host
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);