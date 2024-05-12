require('dotenv').config()
const express = require('express')

const connection = require('./db')
const tokenVerification = require('./middleware/tokenVerification')

const app = express()
const cors = require('cors')

const multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



connection()


//middleware
app.use(express.json())
const corsOrigin = 'http://localhost:3000';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST', 'PATCH', 'DELETE', 'PUT'],
  credentials: true 
})); 
const port = process.env.PORT || 8080


const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const toolRoutes = require("./routes/tools")
const contactRoutes = require("./routes/contacts")

// trasy wymagające weryfikacji tokenem:
app.get("/api/users/",tokenVerification)
app.get("/api/users/me/",tokenVerification)
app.get("/api/users/delete/",tokenVerification)
app.delete("/api/contact/",tokenVerification)
app.delete("/api/tools/:id",tokenVerification)
app.patch("/api/tools/:id",tokenVerification)
app.put("/api/tools/",tokenVerification)

// trasy nie wymagające tokena
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// trasa do przesłania wszystkich narzędzi z bazy i kolekcji tools
app.use("/api/tools", toolRoutes)
// trasa do przesłania wszystkich narzędzi z bazy i kolekcji contact
app.use("/api/contact", contactRoutes)


const imageUploadPath = './public/uploaded_files';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

app.post('/api/image-upload', imageUpload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  //res.send('POST request recieved on server to /image-upload.');
  res.status(200).send({ message: "Zdjecie przeslane", imageUrl:"/uploaded_files/" + req.files[0].filename });
}) 


//app.use(express.static("img/tools"));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))


