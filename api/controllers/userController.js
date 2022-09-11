import User from "../models/User.js";
import Token from "../models/Token.js";
import bcrypt from 'bcryptjs';
import createError from "./errorController.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../utility/sendEmail.js";
import {  sendSms } from "../utility/sendSms.js";
import { createToken } from "../utility/createToken.js";


/**
 * @access public
 * @route api/user
 * @mathod GET
 */



export const getAllUser = async ( req , res , next) => {

   try {

      const users = await User.find();

      if (!users) {

         next(createError(404 , 'data not found'));
         
      }else if (users) {
         
         res.status(200).json(users)
      }

      
      
   } catch (error) {

      next(error);
      
   }

}


/**
 * @access public
 * @route api/user/:id
 * @mathod GET
 */

 export const getSingleUser = async ( req , res , next ) => {
   
   let { id } = req.params

   try {

      const user = await User.findById(id);

      if (!user) {
         
         next(createError(404 , 'data not found'));

      }else if (user) {

         res.status(200).json(user);
         
      }

   } catch (error) {
      next(error);
   }

   }



/**
 * @access public
 * @route api/user
 * @mathod POST
 */

export const createUser = async ( req , res , next ) => {

   try {

      const salt = await bcrypt.genSalt(10);

      const hash_pass = await bcrypt.hash(req.body.password , salt)

      const user = await User.create({...req.body , password : hash_pass });

      res.status(200).json(user)
      
   } catch (error) {
      next(error);
   }
}


/**
 * @access public
 * @route api/user/:id
 * @mathod PUT/PATCH
 */

 export const updateUser = async ( req , res , next ) => {

   let { id } = req.params
   try {

      const user = await User.findByIdAndUpdate( id , req.body , { new :true } );

      res.status(200).json(user);
      
   } catch (error) {
      next(error);
   }

   }


   /**
 * @access public
 * @route api/user/:id
 * @mathod DELETE
 */

export const deleteUser = async ( req , res , next ) => {

   let { id } = req.params
   try {

      const user = await User.findByIdAndDelete(id);

      res.status(200).json(user);
      
   } catch (error) {
      next(error);
   }

}





/**
 * @access public
 * @route api/user/login
 * @mathod POST
 */

 export const userLogin = async ( req , res , next ) => {

   // const {email , password , phone} = req.body;

   try {
      // find user

     const login_user = await User.findOne({email : req.body.email});

   //   cheak user exists or not

     if (!login_user) {

      next(createError(404 , 'user not found'));
      
     }
      // find user with phone number

   //   const user_phone = await User.findOne({phone : req.body.phone});

        //   cheak user exists or not

   //   if (!user_phone) {

   //    next(createError(404 , 'wrong phone number'));
      
   //   }

      // find user

      const password_cheak = await bcrypt.compare( req.body.password , login_user.password );

      //   cheak user exists or not
   
         if (!password_cheak) {
   
         next(createError(404 , 'wrong password'));
         
         }

         const token = jwt.sign({ id : login_user._id , isAdmin : login_user.isAdmin } , process.env.JWT_SECRET)

         const {password , isAdmin , ...user_info} = login_user._doc ;

         res.cookie( "access_token" , token ).status(200).json({
            token : token,
            user : user_info
           
         })
      
      
   } catch (error) {
      next(error);
   }
}






/**
 * @access public
 * @route api/user/register
 * @mathod POST
 */

 export const userRegister = async ( req , res , next ) => {

   // console.log(req.body.password);

   try {

      const salt = await bcrypt.genSalt(10);

      const hash_pass = await bcrypt.hash(req.body.password , salt)

      const user = await User.create({...req.body , password : hash_pass });

   //   await sendEmail(user.email , 'Instagram' , ` Hi ${user.name} veryfied your account`);

   //   sendSms('01713909771' , ` Hi ${user.name} welcome to our INSTAGRAM`);


   //   create token

    const token = createToken({ id : user.id });

   //  upDate token

   await Token.create({ userId : user._id , token : token });

   //   verify link 

      const veify_link = `http://localhost:3000/user/${user.id}/verify/${token}`

      await sendEmail(user.email , 'Verify account' , veify_link );

      res.status(200).json(user)
      
   } catch (error) {
      next(error);
   }
}


/**
 * @access public
 * @route api/me
 * @mathod GET
 */

export const getLoggedInUser = async  (req, res, next) => {
   
   try {
      //   get token

      const bearer_token =  req.headers.authorization;

      let token = '';

      if ( bearer_token ) {

         token = bearer_token.split(' ')[1]; 

          //  get token user

          const user_logged_in = jwt.verify(token , process.env.JWT_SECRET);

          if (!user_logged_in) {

            next(createError(500 , 'Invalid token'));
           
          }

          if (user_logged_in) {

            const user = await User.findById(user_logged_in.id);
            res.status(200).json(user);
            
          }
      }


   //    cheak token exists

      if (!bearer_token) {
         next(createError(404 , 'Token not found'));
      }

    
      
   } catch (error) {
      next(error);
     
   }

}


// verify user account


export const verifyUserAccount = async ( req , res , next ) => {

   try {

      const { id , token } = req.body;

      //  cheak token 

      const verify = await Token.findOne({ id : id , token : token });

      //  cheake verify

      if ( ! verify ) {
         next(createError(404 , 'Invalid Verify URL'))
      }

      if ( verify ) {
         await User.findByIdAndUpdate(id , {
            isVerified : true
         })
         res.status(200).json({message : 'User account verified succesfully'});
         verify.remove();
         
      }
      
   } catch (error) {
      next(error);
      console.log(error);
   }

}


//   password recover link genarat controller


  export const recoverPassword = async (req , res , next) =>{

   try {

      // get email
      const recover_user =await User.findOne({email : req.body.email});
      
      if (!recover_user) {
         res.status(404).json({
            message : "Email doesn't exixts"
         })
         
      }

      if ( recover_user ) {
       const token = createToken({id : recover_user._id} , '1h');

       const recover_url = `http://localhost:3000/recover-password/${token}` ;

       await Token.create({
         userId : recover_user._id,
         token : token
       })

       sendEmail( recover_user.email , 'Recover password', recover_url);

       res.status(200).json({
         message : 'Password recover link send'
       });
         
      }
     
        
   } catch (error) {
      next(error);
      
   }
   
  }



//   password reset


export const resetPassword = async ( req , res , next ) => {

   try {

      const {token } = req.body ;

      // shas password

      const salt = await bcrypt.genSalt(10);
      const hash_pass = await bcrypt.hash(req.body.password , salt)
      
      // get user id

      const {id } = jwt.verify( token , process.env.JWT_SECRET)

      // change password

      if (id) {
         const user_detalis = await User.findByIdAndUpdate(id , {
            password : hash_pass
         })
      }
      res.send('Password change successfully')
      token.remove();
   } catch (error) {
      next(createError(401 , 'Time Out'));
      console.log(error);
      
   }

}


  