const projetoSpot = require('../models/projetoSpots');

// Atualiza o status de uma vaga
function updateprojetoSpot(req, res) {
    const { id, status } = req.body;
    projetoSpot.updateStatus(id, status, (result) => {
        if (result.affectedRows > 0) {
            res.send({ success: true, message: 'Status atualizado!' });
        } else {
            res.status(404).send({ success: false, message: 'Erro ao atualizar status!' });
        }
    });
}

// Obtém o status de todas as vagas
function getAllprojetoSpots(req, res) {
    projetoSpot.getAll((spots) => {
        res.send(spots);
    });
}

module.exports = {
    updateprojetoSpot,
    getAllprojetoSpots
};