let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require('./api-routes');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/Tugas2-NodeJs', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error',console.log.bind(console,"database error"));
db.once('open',function(){
    console.log("Koneksi ke MongoDB Sukses");
})
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));
app.use('/api', apiRoutes);
app.listen(port, function(){
    console.log('Port yang dipakai adalah '+port);
});