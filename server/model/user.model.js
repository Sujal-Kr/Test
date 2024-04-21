const mongoose = require('mongoose');
const validator = require('email-validator')
const bcrypt = require('bcrypt')
mongoose.connect(process.env.DB_URL).then(db => {
    console.log('Db connection established')
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [function () {
            validator.validate(this.email)
        }, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 Character"],
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: function () {
            return this.password == this.confirmPassword
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'owner'],
        default: 'user'
    }
})

userSchema.pre("save", function () {
    this.confirmPassword = undefined
})

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash
})


const userModel = new mongoose.model('userModel', userSchema);
module.exports = userModel;