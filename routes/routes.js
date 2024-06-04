const express = require('express');
const Mahasiswa = require('../models/Mahasiswa');
const router = express.Router();

// Endpoint API CRUD Mahasiswa
router.get('/', async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find();
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        const mahasiswa = new Mahasiswa({
            prodi: req.body.prodi,
            nama: req.body.nama,
            npm: req.body.npm,
        });

        const addMahasiswa = await mahasiswa.save();

        res.json({
            message: 'Berhasil menambah data',
            data: addMahasiswa
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        const editMahasiswa = await Mahasiswa.findByIdAndUpdate(id, body)
        const mahasiswa = await Mahasiswa.findById(id)

        res.json({
            message: 'Berhasil update data',
            data: mahasiswa
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deleteMahasiswa = await Mahasiswa.findByIdAndDelete(id)

        res.json({
            message: 'Berhasil menghapus data'
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// endpoint dosen

module.exports = router;