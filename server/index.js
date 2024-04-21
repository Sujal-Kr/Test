const express = require('express')
const cors = require('cors')
const cookie= require('cookie-parser')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cookie())
app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server is listening on the port ", PORT);
})

const userRouter = require('./router/user.router')
const authRouter = require('./router/auth.router')


app.use('/auth', authRouter)
app.use('/user', userRouter)
