const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.post( '/', async (req, res, next) => {
    const { name, difficult, duration, season, country } = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            difficult,
            duration,
            season,
        });
        country.forEach( async (c) => {
            const countryAdded = await Country.findByPk(c.id);
            const actWithCountry = newActivity.addCountry(countryAdded);
        });
        return res.status(201).send(newActivity);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;