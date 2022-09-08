import express from 'express';
import { createUser, deleteUser, getAllUser, getLoggedInUser, getSingleUser, recoverPassword, updateUser, userLogin, userRegister, verifyUserAccount } from '../controllers/userController.js';
import { adminMiddlewaer } from '../middlewares/adminMiddleware.js';
import { authMiddlewaer } from '../middlewares/authMiddleware.js';
import { userMiddlewaer } from '../middlewares/userMiddleware.js';



// init Router

const router = express.Router();



// user auth api

router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/me', getLoggedInUser);
router.post('/verify', verifyUserAccount);
router.post('/recover-password', recoverPassword);

// router rest api

router.route('/').get(authMiddlewaer, getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).put(adminMiddlewaer, updateUser).patch(adminMiddlewaer, updateUser).delete(userMiddlewaer, deleteUser);



//  router export

export default router ;