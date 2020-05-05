const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
// const withAuth = require('../middlewares/auth-middleware');


router.get('/users', userController.users);

router.post('/signup', userController.signup);
router.get('/:id', userController.userDetail);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);
router.delete('/delete', userController.deleteAll);
router.post('/authenticate', userController.authenticate);
// router.get('/todos', withAuth, todoController)
module.exports = router;