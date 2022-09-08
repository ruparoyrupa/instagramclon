
import student from "../models/student.js";
import bcrypt from 'bcryptjs';
import createError from "./errorController.js";

/**
 * @access public
 * @route api/student
 * @mathod GET
 */



export const getAllStudent = async ( req , res , next) => {

   try {

      const students = await student.find();

      if (!students) {

         next(createError(404 , 'data not found'));
         
      }else if (students) {
         
         res.status(200).json(students)
      }

      
      
   } catch (error) {

      next(error);
      
   }

}


/**
 * @access public
 * @route api/student/:id
 * @mathod GET
 */

 export const getSingleStudent = async ( req , res , next ) => {
   
   let { id } = req.params
   try {

      const students = await student.findById(id);

      if (!students) {
         
         next(createError(404 , 'data not found'));

      }else if (students) {

         res.status(200).json(students);
         
      }

      
      
   } catch (error) {
      next(error);
   }

   }



/**
 * @access public
 * @route api/student
 * @mathod POST
 */

export const creatStudent = async ( req , res , next ) => {

   try {

      const salt = await bcrypt.genSalt(10);

      const hash_pass = await bcrypt.hash(req.body.password , salt)

      const students = await student.create({...req.body , password : hash_pass });

      res.status(200).json(students)
      
   } catch (error) {
      next(error);
   }
}


/**
 * @access public
 * @route api/student/:id
 * @mathod PUT/PATCH
 */

 export const updateStudent = async ( req , res , next ) => {

   let { id } = req.params
   try {

      const students = await student.findByIdAndUpdate( id , req.body , { new :true } );

      res.status(200).json(students);
      
   } catch (error) {
      next(error);
   }

   }


   /**
 * @access public
 * @route api/student/:id
 * @mathod DELETE
 */

export const deleteStudent = async ( req , res , next ) => {

   let { id } = req.params
   try {

      const students = await student.findByIdAndDelete(id);

      res.status(200).json(students);
      
   } catch (error) {
      next(error);
   }

}