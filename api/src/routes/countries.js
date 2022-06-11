const { Router } = require('express');
const { Country, Activity, Op } = require('../db');
const axios = require('axios');


/**| | Load Data | | */

const dataCarghed = (async () => {
    const url = `https://restcountries.com/v3.1/all`
    const countries = await axios.get(url)
    const array = countries.data.map( (c) => {
         const data = {
            id: c.cca3, 
            name: c.name.common,
            img: c.flags.png, 
            continent: c.continents[0],
            capital: typeof c.capital !== 'undefined' ? c.capital[0] : 'N/A',
            subregion: c.subregion,
            area: c.area,
            population: c.population
         };
         return data;   
        }
        );
    array.forEach(async (c) => await Country.create(c));
    console.log(array);
})();

const router = Router();


/*| | Routes | |*/

router.get( '/', async (req, res, next) => {
    const { name } = req.query;
    try {
        if (name) {
            let matchName = await Country.findAll({
                where: {
                name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: Activity,
                    attributes:['name', 'difficult', 'duration', 'season']
                } 
            });
            if (matchName.length !== 0) {
                return res.json(matchName);
            }
            return res.json(`Error: '${name}' not founded, please enter a correct data`);
        }
        return await Country.findAll()
                .then( (countries) => {
                    res.send(countries);
                }) 
    } catch (error) { 
        next(error);
    }
});

router.get('/:id', async (req,res,next) => {
    try {
        let {id} = req.params;
        let countryData = await Country.findByPk(id,{
            include: {
                model: Activity,
                attributes:['name', 'difficult', 'duration', 'season']
            } 
        });
        if (countryData) {
            res.json(countryData)
        }
        res.json('Error: 404, Country not founded')
    } catch (error) {
        return next(error);
    }
});



module.exports = router;