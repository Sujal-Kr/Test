const express = require('express');
const userRouter = express.Router();
const {getUser,updateUser,deleteUser,getAllUsers} = require('../controller/user.controller');
const {protectRoute,isAuthorised}= require('../controller/middleware')


userRouter.use(protectRoute)

userRouter
.route("/:id")
.patch(updateUser)
.delete(deleteUser)


userRouter
.route("/userProfile")
.get(getUser)

userRouter.use(isAuthorised(['admin']))
userRouter
.route('')
.get(getAllUsers)

module.exports = userRouter


