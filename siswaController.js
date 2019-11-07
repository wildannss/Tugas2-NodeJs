siswaModel = require('./siswaModel');

exports.index = function(req,res){
    siswaModel.get(function(err,siswa){
        if(err){
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'siswa belom ditambah karena pakai GET',
            data: siswa
        });
    });
};

exports.new = function(req,res){
    var siswa = new siswaModel();
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;
    
    siswa.save(function(err){
        // if(err)
        // res.json(err);
        res.json({
            message: 'siswa baru ditambah bos',
            data: siswa
        });
    });
};

exports.view = function(req,res){
    siswaModel.findById(req.param.siswa_id,function(err,siswa){
        if(err)
            res.send(err);
            res.json({
                message: 'lagi loading',
                data: siswa
            });
    });
};