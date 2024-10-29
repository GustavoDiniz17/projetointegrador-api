const express = require('express');
const { updateprojetoSpot, getAllprojetoSpots } = require('../controllers/parkingController');

const router = express.Router();

// Rota para atualizar o status de uma vaga
router.post('/update-spot', updateprojetoSpot);

// Rota para obter o status de todas as vagas
router.get('/get-spots', getAllprojetoSpots);

module.exports = router;