const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    jadwal: {
        type: String,
        required: true,
        unique: true
    },
    pembimbing: {
        type: String,
        required: true,
        unique: true,
    },
    lokasi_ekskul: {
        type: String,
        required: true,
        unique: true,
    },
    total_murid: {
        type: String,
        required: true,
        unique: true,
    },
    kontak_pembimbing: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('Ekstras', UserSchema)