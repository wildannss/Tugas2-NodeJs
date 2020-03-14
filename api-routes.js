    let router = require('express').Router()

router.get('/', function(req,res){
    res.json({
        status: "API working",
        pesan: "Selamat Datang"
    });
});

let siswaController = require('./siswaController');

router.route('/siswa')
    .get(siswaController.index)
    .post(siswaController.new);

module.exports = router;