const pool = require('../../db');
const queries = require('./queries');

const getNepaliStatus = (req, res) => {
    pool.query(queries.getStatus, (error, results) => {
     if(error) throw error;
     res.status(200).json(results.rows);
    });
 }

 module.exports = {
    getNepaliStatus,
};