const express = require('express');
const bodyParser = require('body-parser');

// Creation de l'app express
const app = express();

// server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse request data content type application/json
app.use(bodyParser.json());

// root route
app.get('/', (req, res)=>{
    res.send('Test Root Route');
});

// import user routes
const userRoutes = require('./src/routes/user.route');


// create user routes
app.use('/api/v1/users', userRoutes); 

// Ecouter sur le port
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

