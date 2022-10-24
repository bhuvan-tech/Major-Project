import express from 'express';
const router = express.Router();
import {getUsers, addUser, getUserById, updateUser, deleteUser} from '../controller/auth.js'

// 127.0.0.1/api/users
router
    .route('/users')
    .get(getUsers)
    .post(addUser)

    // 127.0.0.1/api/users/6351e3fb583bae833afb4a13
router
    .route('/users/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)

export default router;