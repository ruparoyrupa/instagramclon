import express from 'express';
import { creatStudent, deleteStudent, getAllStudent, getSingleStudent, updateStudent } from '../controllers/studentControllers.js';


// init Router

const router = express.Router();

// router

router.route('/').get(getAllStudent).post(creatStudent);
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);


//  router export

export default router ;