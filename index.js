const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const cors = require('cors')


const 
     contentRoutes = require('./routes/content');
      

mongoose.connect(config.DB_URI).then(() => {
  if (process.env.NODE_ENV !== 'production') {
  //  fakeDb.seedDb();
  }
});

const app = express();
// var http = require('http');
// const server = require('http').createServer(app);


// server.listen(3000);





app.use(bodyParser.json());
app.use(cors());


app.use('/api/v1/content',contentRoutes);


// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.MongoDB({
//             db: config.DB_URI,
//             collection: 'log',
//             level: 'info',
//             storeHost: true,
//             capped: true,
//         })
//     ]
// });

// logger.stream = {
//     write: (message, encoding) => {
//         console.log('helllllllllllo')
//         logger.info('helloooooooooooooooooooooooo------',message);
//     },
// };

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(appPath));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3003;

app.listen(PORT , function() {
  console.log('App is running!');
});
