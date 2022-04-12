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

// import student routes
const studentRoutes = require('./src/routes/student.route');


// create student routes
app.use('/api/v1/students', studentRoutes); 

// import modules routes
const moduleRoutes = require('./src/routes/module.route');


// create modules routes
app.use('/api/v1/modules', moduleRoutes);

// import speciality routes
const specialityRoutes = require('./src/routes/speciality.route');


// create speciality routes
app.use('/api/v1/speciality', specialityRoutes);

// Ecouter sur le port
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

