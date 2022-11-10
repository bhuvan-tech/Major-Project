import express from 'express';
const router = express.Router();
import {getUsers, addUser, getUserById, updateUser, deleteUser,login} from '../controller/auth.js'

// 127.0.0.1/api/users
router
    .route('/users')
    .get(getUsers)
   

    // 127.0.0.1/api/users/6351e3fb583bae833afb4a13
router
    .route('/users/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)

router.post('/login', login);
router.post('/adduser', addUser)

export default router;