const bodyParser = require("body-parser");
const userRouter = require('./routes/user');
const mongo = require("mong");

const cors = require('cors');

dotenv.config()
const app = express();
app.use(cors())

mongo.connect(process.env.MONGO_URL)

.then(() => console.log("Database connected successfully!"))

.catch((err) => console.log(err))

app.use(bodyParser.json())

app.use('/API/emp', userRouter)
const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {

console.log("Server started and running at ${PORT}");
})