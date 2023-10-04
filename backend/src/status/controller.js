const pool = require('../../db');
const queries = require('./queries');

const getAllNepaliStatus = (req, res) => {
    pool.query(queries.getStatus, (error, results) => {
        if (error) {
            console.log('There is an error.......');
            console.error('ERROR: ', error);
        } else {
            res.status(200).json(results.rows);
        }
    });
}

const getNepaliStatusById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStatusById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addStatus = (req, res) => {
    const { title } = req.body;

    pool.query(queries.addNepaliStatus, [title], (error, results) => {
        if (error) throw error;
        res.status(201).send('Status inserted successfully ◙');
    });
}

module.exports = {
    getAllNepaliStatus,
    getNepaliStatusById,
    addStatus,
};