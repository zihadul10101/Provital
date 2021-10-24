const express = require('express')
const app = express()
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/auth")
const review = require("./routes/review")
const port = 5000



dotenv.config();
app.use(cors());
app.use(express.json());
// mongodb conect
mongoose.connect(process.env.Mongoose_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))

//use all routes 
app.use("/api/auth", auth)
app.use("/api/reviews", review)

app.get('/', (req, res) => {
  res.send('PIVOTAL COVID 19')
})

app.listen(port, () => {
  console.log(`${port}`, 'not connected')
})