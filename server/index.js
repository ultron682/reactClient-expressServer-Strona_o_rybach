require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./db')
const tokenVerification = require('./middleware/tokenVerification')


const app = express()
connection()


//middleware
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080


const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")


// trasy wymagające weryfikacji tokenem:
app.get("/api/users/",tokenVerification)
app.get("/api/users/me/",tokenVerification)
app.get("/api/users/delete/",tokenVerification)

// trasy nie wymagające tokena
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))


