const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountries = require("../controllers/getCountries");
const getActivities = require("../controllers/getActivities");
const getCountriesById = require("../controllers/getCountriesById");
const getCountriesByName = require("../controllers/getCountriesByName");
const postActivities = require("../controllers/postActivities");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', getCountries);
router.get('/countries/byName', getCountriesByName);
router.get('/countries/:idPais', getCountriesById);
router.post('/activities', postActivities);
router.get('/activities', getActivities);



module.exports = router;
