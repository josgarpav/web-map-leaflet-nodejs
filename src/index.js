const express = require('express');
const engine = require('ejs-mate');
// Esto es para concatenar directorios
const path = require('path');
// Inicialización -> Primer paso
const app = express();

//Settings
app.engine('ejs', engine);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

 //routes
app.use(require('./routes/'));

// static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(4000, ()=>{
    console.log('Server on port 4000');
});