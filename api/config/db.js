import mongoose from "mongoose";


//  mongoDB connection 


const mongoDBConnect = async () =>{
  
    try {

       const  connection = await mongoose.connect(process.env.MONGO_STRING) ;
       console.log(`MongoDB connect succfully`.bgBlue.black);
    } catch (error) {

        console.log(error);
        
    }
}

//  export mongo connection

export default mongoDBConnect ;