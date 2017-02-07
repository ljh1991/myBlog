const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    unique: true,
    type: String
  },
  pwd: String,
})

const Models = {
  User: mongoose.model('User', userSchema)
}

mongoose.connect('mongodb://127.0.0.1/myTest')
// mongoose.set('debug', true)

const db = mongoose.connection

db.on('error', function () {
  console.log('Database connection error.')
})

db.once('open', function () {
  console.log('The database has connected.')
})

module.exports = Models
