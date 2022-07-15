const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//Middleware for serving static files
app.use(express.static("public"));

//Routes
app.use(["/home", "/"], require(path.join(__dirname + "/src/routes/home")));


//Templating engine configuration
app.engine('.hbs', hbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname +'/src/views'));



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})