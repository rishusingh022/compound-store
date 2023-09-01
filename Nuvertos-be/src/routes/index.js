const router = require('express').Router();
const compoundsController = require('../controllers/compoundsController');
const { validateCompound, validateQuery, validateId } = require('../middlewares/middlewares');

router.route('/compounds')
  .get(validateQuery, compoundsController.getAllCompounds)
  .post(validateCompound,compoundsController.addCompound);

router.route('/compounds/:id')
  .get(validateId, compoundsController.getCompoundById)
  .put(validateId, validateCompound, compoundsController.updateCompoundById)
  .delete(validateId, compoundsController.deleteCompoundById);

module.exports = router;