const path=require('path')
const express=require('express')
//const dotenv=require('dotenv')
const colors=require('colors')
const morgan=require('morgan')
const connectDB=require('./config/db')
require('dotenv/config')

//dotenv.config({path: './config/cofig.env' })
connectDB()

const transactions=require('./routes/transactions')

 const app=express()

 app.use(express.json())

app.use('/api/v1/transactions',transactions)

if(process.env.REACT_APP_NODE_ENV==='production'){  
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

 const PORT=process.env.PORT || 5000

 app.listen(PORT,console.log(`server running in ${process.env.REACT_APP_NODE_ENV} mode on port ${PORT}`.yellow.bold))