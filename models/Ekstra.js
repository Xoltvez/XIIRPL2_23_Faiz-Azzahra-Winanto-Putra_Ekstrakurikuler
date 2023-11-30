const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        
    },
    jadwal: {
        type: String,
        required: true,
        
    },
    pembimbing: {
        type: String,
        required: true,
        
    },
    lokasi_ekskul: {
        type: String,
        required: true,
        
    },
    total_murid: {
        type: String,
        required: true,
    },
    kontak_pembimbing: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Ekstras', UserSchema)