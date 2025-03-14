import express from 'express';

const Router = express.Router();

Router.get('/',(req,res,next)=>{
    res.json({from:'shop routes'})
});


export default Router;