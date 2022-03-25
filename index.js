const express = require('express');

// Creation de l'app express
const app = express();

// server port
const port = process.env.PORT || 5000;

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

