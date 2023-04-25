const { Country, Op } = require('../db');


const getCountriesByName = async (req, res) => {
    try {
        const { name } = req.query;

        const foundName = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if(foundName.length === 0) throw new Error("País no existente");
        res.status(200).json(foundName);
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = getCountriesByName;