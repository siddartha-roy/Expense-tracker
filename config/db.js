const mongoose= require('mongoose');



const connectDB=async ()=>{
    //console.log(process.env.MONGO_URI)
    try{
        const conn=await mongoose.connect(process.env.REACT_APP_MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});

        console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log(`Error:${err.message}`.red)
        process.exit(1)
    }

}
module.exports=connectDB
