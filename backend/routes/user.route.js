const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/users', userController.users);

router.post('/signup', userController.signup);
router.get('/:id', userController.userDetail);
router.put('/:id/update', userController.updateUser);
router.delete('/:id/delete', userController.deleteUser);
router.delete('/delete', userController.deleteAll);
router.post('/login', userController.login);

module.exports = router;