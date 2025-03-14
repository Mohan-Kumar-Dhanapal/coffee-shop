import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import shopRoutes from './routes/shop-routes.js';
import adminRoutes from './routes/admin-routes.js';

//Loading the env variables
dotenv.config();

//Initiating the express app
const app = express();

//Middleware to handle CORS and request body
app.use(cors());
app.use(express.json());


// Middleware to handle routes
app.use(shopRoutes);
app.use('/admin',adminRoutes);


// Running the server on the specified port
const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=>{console.log(`Server is running on port: ${PORT}`);
})