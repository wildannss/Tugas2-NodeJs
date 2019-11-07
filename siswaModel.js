var mongoose = require('mongoose');
var siswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tanggallahir: {
        type: Date,
        required: true
    },
    jeniskelamin: {
        type: String,
        required: true
    },
    hobi: {
        type: String,
        required: true
    },
});

var siswaModel = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function(callback,limit){
    siswaModel.find(callback).limit(limit);
};