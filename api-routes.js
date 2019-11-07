let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'penggunaan API sukses',
        message: 'selamat datang',
    });
});

var siswaController = require('./siswaController');

router.route('/siswa')
    .get(siswaController.index)
    .post(siswaController.new);

module.exports = router;