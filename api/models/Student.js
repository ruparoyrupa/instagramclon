import mongoose from "mongoose";


// create student schema



const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    phone : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    age : {
        type : Number,
        required : true,
        trim : true
    },
    gender : {
        type : String
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    isAdmin : {
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

export default mongoose.model('Student' , studentSchema);