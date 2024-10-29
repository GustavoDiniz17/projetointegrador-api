const db = require('../config/mysqlConfig');

class projetoSpot {
    static updateStatus(id, status, callback) {
        const query = 'INSERT INTO projeto_spots (id, status, last_updated) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE status = VALUES(status), last_updated = NOW()';
        db.query(query, [id, status], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    static getAll(callback) {
        const query = 'SELECT * FROM projeto_spots';
        db.query(query, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
}

module.exports = projetoSpot;