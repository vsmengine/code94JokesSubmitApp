const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swagger =  require('./swagger');

const jokesRoute = require('./v1/routes/jokes');
const authRoute = require('./v1/routes/auth');

const app = express();
const version = '1.0';
const port = process.env.port || 4100;
const MONGO_DB = process.env.MONGO_DB || 'test';
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_PORT = process.env.MONGO_DB_PORT || 27017;
const JWT_SECRET = process.env.JWT_SECRET || 'sampath_vithanage';

mongoose.set('strictQuery', false);
// MongoDB cloud URI: mongodb+srv://Admin:admin123@cluster0.ersruuc.mongodb.net/?retryWrites=true&w=majority
// MongoDB docker URI: mongodb://admin:secret@mongo:27017/?retryWrites=true&w=majority
// mongoose.connect(`mongodb+srv://Admin:admin123@cluster0.ersruuc.mongodb.net/?retryWrites=true&w=majority`).then(
mongoose.connect(`mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@mongo:${MONGO_DB_PORT}/?retryWrites=true&writeConcern=majority&authSource=admin`).then(
    (res) => {
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
        console.log('Database connection is made successfully!')
    },
    (err) => { 
        /** handle initial connection error */
        console.log("Error", err);
    }
);

// Configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
  
// Routes
app.use(`/api/${version}/auth`, authRoute);
app.use(`/api/${version}/jokes`, jokesRoute);

// 404

swagger(app);

// Listen
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
