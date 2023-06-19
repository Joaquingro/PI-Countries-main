const { Activity } = require('../db');
//Hola
const getActivities = async (req, res) => {
    try {
        let foundActivities = await Activity.findAll();
        if(foundActivities.length === 0) throw new Error("No hay actividades");
        res.status(200).json(foundActivities);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = getActivities;