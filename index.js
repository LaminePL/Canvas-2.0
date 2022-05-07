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

// import campus routes
const campusRoutes = require('./src/routes/campus.route');


// create campus routes
app.use('/api/v1/campus', campusRoutes);

// import student_notes routes
const student_notesRoutes = require('./src/routes/student_notes.route');


// create student_notes routes
app.use('/api/v1/student_notes', student_notesRoutes);

// import compta routes
const comptaRoutes = require('./src/routes/compta.route');


// create compta routes
app.use('/api/v1/compta', comptaRoutes);

// import contrat_pro routes
const contrat_proRoutes = require('./src/routes/contrat_pro.route');


// create contrat_pro routes
app.use('/api/v1/contrat_pro', contrat_proRoutes);

// import contributor routes
const contributorRoutes = require('./src/routes/contributor.route');


// create contributor routes
app.use('/api/v1/contributor', contributorRoutes);

// import hiring routes
const hiringRoutes = require('./src/routes/hiring.route');


// create hiring routes
app.use('/api/v1/hiring', hiringRoutes);

// import level routes
const levelRoutes = require('./src/routes/level.route');


// create level routes
app.use('/api/v1/level', levelRoutes);

// import role routes
const roleRoutes = require('./src/routes/role.route');


// create role routes
app.use('/api/v1/role', roleRoutes);


// Ecouter sur le port
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

