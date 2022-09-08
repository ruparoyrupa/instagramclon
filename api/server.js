import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import studentRoute from './routes/student.js';
import userRoute from './routes/user.js';
import mongoDBConnect from './config/db.js';
import errorHendler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//  init express


const app = express();

dotenv.config();


mongoDBConnect();


// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(cors());


//  init env variable


const PORT = process.env.SERVER_PORT || 5000;
 
                                                
//  Route

app.use('/api/student' , studentRoute);

app.use('/api/user' , userRoute);


//  express error hendler

app.use(errorHendler);


//  listen server 


 app.listen( PORT , () => {
    console.log(`Server is running on port ${PORT} succesfully .`.bgGreen.black);
 })

