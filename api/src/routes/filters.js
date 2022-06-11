const { Router } = require('express');
const { Country, Activity, Op } = require('../db');
const axios = require('axios');

const router = Router();

router.get('/asc', async (req,res,next) => {
    try {
        let orderAsc = await Country.findAll({
            order: [['name', 'ASC']],
            include: {
                model: Activity,
                attributes:['name', 'difficult', 'duration', 'season']
            } 
        });
        if (orderAsc) {
            return res.json(orderAsc);
        }
        return res.json("Error, function orderAsc doesn't work");
    } catch (error) {
        next(error);
    }
});

router.get('/desc', async (req,res,next) => {
    try {
        let orderDesc = await Country.findAll({
            order: [['name', 'DESC']],
            include: {
                model: Activity,
                attributes:['name', 'difficult', 'duration', 'season']
            } 
        });
        if (orderDesc) {
            return res.json(orderDesc);
        }
        return res.json("Error, function orderAsc doesn't work");
    } catch (error) {
        next(error);
    }
});

router.get('/maxPopulation', async (req,res,next) => {
    try {
        let maxPopulation = await Country.findAll({
            order: [['population', 'DESC']],
            include: {
                model: Activity,
                attributes:['name', 'difficult', 'duration', 'season']
            } 
        });
        if (maxPopulation) {
            return res.json(maxPopulation);
        }
        return res.json("Error, function maxPopulation doesn' work");
    } catch (error) {
        next(error);
    }
});

router.get('/minPopulation', async (req,res,next) => {
    try {
        let minPopulation = await Country.findAll({
            order: [['population', 'ASC']],
            include: {
                model: Activity,
                attributes:['name', 'difficult', 'duration', 'season']
            } 
        });
        if (minPopulation) {
            return res.json(minPopulation);
        }
        return res.json("Error, function maxPopulation doesn' work");
    } catch (error) {
        next(error);
    }
});





module.exports = router;