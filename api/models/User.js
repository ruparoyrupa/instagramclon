import mongoose from "mongoose";


// create student schema



const userSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
        trim : true
    },
    email : {
        type : String,
        required: true,
        unique : true,
        trim : true
       
    },
    phone : {
        type : String,
        trim : true
       
    },
    age : {
        type : Number,
        trim : true
    },
    gender : {
        type : String
    },
    userName : {
        type : String,
        required: true,
        unique : true,
        trim : true
        
    },
    password : {
        type : String,
        required: true,
        unique : true,
        trim : true
       
    },
    isAdmin : {
        type : Boolean,
        default : false
      
    },
    isVerified : {
        type : Boolean,
        default : false
      
    },
    status : {
        type : Boolean,
        default : true
      
    },
    trash : {
        type : Boolean,
        default : false
      
    }




},{
    timestamps : true
})


// export models

export default mongoose.model('User' , userSchema);