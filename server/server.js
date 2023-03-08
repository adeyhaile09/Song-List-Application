var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var mongoconfig = require('./config/db.config');
var song = require('./routes/song'); // Imports routes for the songs

var port = process.env.PORT || 5000;

var app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// Set up mongxoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || mongoconfig.url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// configure app to use bodyParser(), this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// routes
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.get('/', (req, res) => {
  res.json({ message: 'Hello! welcome to our api!' });
});

// chain routers
// all of the routers will be prefixed with /api
router.use('/song', song); // /api/song

// Register the 'root' router
app.use('/api', router);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
