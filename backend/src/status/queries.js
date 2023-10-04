const getStatus = 'SELECT * FROM nepali_status';
const getStatusById = 'SELECT * FROM nepali_status WHERE id = $1';
const addNepaliStatus = 'INSERT INTO nepali_status (title) VALUES ($1)';
const removeStatusQuery = 'DELETE FROM nepali_status WHERE id = $1';

module.exports = {
    getStatus,
    getStatusById,
    addNepaliStatus,
    removeStatusQuery,
}