const { Country } = require('../db');
const { Activity } = require('../db')
const getCountries = async (req, res) => {
    try {
        let foundContries = await Country.findAll({
            include: { model: Activity }
        });
        res.status(200).json(foundContries);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = getCountries;