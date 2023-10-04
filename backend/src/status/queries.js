const getStatus = 'SELECT * FROM nepali_status';
const getStatusById = 'SELECT * FROM nepali_status WHERE id = $1';

module.exports = {
    getStatus,
    getStatusById,
}