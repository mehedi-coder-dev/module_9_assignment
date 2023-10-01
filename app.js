const express = require('express')
const app = express()
const router = require('./src/Routes/api')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const multer  = require('multer')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const mongoose = require('mongoose')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp');
const validator = require('validator');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(limiter)
app.use(helmet());
app.use(hpp());



app.use('/api/v1',router)

module.exports = app




