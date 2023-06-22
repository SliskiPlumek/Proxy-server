const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const routes = require('./routes/routes')

const app = express()
// creating a request limiter
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 10 // maximum request per setted time
})
// using limiter and setting trust proxy flag
app.use(limiter)
app.set('trust proxy', 1)
// using cors
app.use(cors())
// main route
app.use('/proxy', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})