const express = require('express')
const app = require('express')
const Port = 4141
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('session')
const MongoStore = require('connect-mongo')(session)
const flash = require('flash')
const logger = require('morgan')
const connectDB= require('./config/database')































//port
app.listen( Port, () => {
    console.log('App is on the run, better catch it!')
})