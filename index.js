const express=require('express')
const app=express();
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db')
const cors=require('cors')

dotenv.config();

connectDB();

const PORT =5500;


app.use(cors());
app.use(express.json());
app.use(morgan('dev')) 



//Routes 
app.use('/auth',require('./routes/authRoute'))

app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
  