const router = require('express').Router()
const contactsController = require('../controllers/contacts.controller')()

// router.use('/api/users', contactsController)


// api routes ===========================================================
// router.get( '/', contactsController.getAll)
// router.get('/:id', contactsController.getOneById)
router.post('/', contactsController.insert)
// router.put('/:id', contactsController.updateById)
// router.delete('/:id', contactsController.removeById)




module.exports = router