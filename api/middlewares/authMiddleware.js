import createError from "../controllers/errorController.js";
import jwt   from 'jsonwebtoken';

//  check user authentecated or not

export const authMiddlewaer = (req ,res , next) => {


try {

//   check token 

    const token = req.cookies.access_token;

    if (!token) {
        return next(createError(401 , 'You are not authentecated'))
    }

//   user loged in

    const login_user  = jwt.verify(token , process.env.JWT_SECRET);

    if (!login_user) {
        return next(createError(401 , 'Invalid token'))
    }


    if (login_user) {
        req.user = login_user;
        next()
    }

    
    
} catch (error) {
    next(error);
}

}