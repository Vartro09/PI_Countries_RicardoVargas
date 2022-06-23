const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.post( '/', async (req, res, next) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        if (newActivity && countries && Array.isArray(countries))
        {
            const promisesCountries = countries.map(async (t) => {
                let country = await Country.findAll({
                    where: { name: t}
                    });
                
                return newActivity.setCountries(country); //la asociacion la realiza como objeto
                });  

            await Promise.all(promisesCountries); 
        } // end-if

        let resultActivity = await Activity.findAll({
            where:{ 
                name: name
             },
            include: [Country]
            });

        return res.status(201).json(resultActivity[0]);

        // let selectCountries = await Country.findAll({
        //     where: {
        //         name: countries
        //     }
        // });

        // let result = newActivity.addCountry(selectCountries);

        // return res.status(201).send(result);

        // countries.forEach( async (c) => {
        //     const countryAdded = await Country.findByPk(c.id);
        //     const actWithCountry = newActivity.addCountry(countryAdded);
        // });
        // return res.status(201).send(newActivity);
    } catch (error) {
        return next(error);
    }
});

router.get('/', async (req,res,next) => {
    try {
        const activities = await Activity.findAll();
        if (activities.length > 0) {
            return res.json(activities);
        } 
        return res.json("Error, coudn't get activities");
    } catch (error) {
        next(error)
    }
});




module.exports = router;