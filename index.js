let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require('./api-routes');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect('localhost/Tugas2-NodeJs');
var db = mongoose.connection;
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));
app.use('/api', apiRoutes);
app.listen(port, function(){
    console.log('Haiiii'+port);
});