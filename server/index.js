const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const EmployeeModel=require('./models/Employee')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/employee',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
    console.log('mongoose is conneted')
})

app.post('/login',(req,res)=>{
    const{email,password}=req.body
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password==password){
                res.json("Successfully login")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else 
        {
            res.json("No record existed")
        }
    })
    .catch(err=>res.json(err))
})


app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.listen(3000,()=>{
    console.log('server is running')
})