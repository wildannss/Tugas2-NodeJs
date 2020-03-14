    let router = require('express').Router()

router.get('/', function(req,res){
    res.json({
<<<<<<< HEAD
        status: "API jalan",
=======
        status: "API working",
>>>>>>> master
        pesan: "Selamat Datang"
    });
});

let siswaController = require('./siswaController');

router.route('/siswa')
    .get(siswaController.index)
    .post(siswaController.new);
router.route('/siswa/:siswa_id')
    .get(siswaController.view)
    .put(siswaController.put);

module.exports = router;