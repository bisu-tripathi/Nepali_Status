const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getAllNepaliStatus);
router.get('/:id', controller.getNepaliStatusById);

router.post('/', controller.addStatus);
module.exports = router;