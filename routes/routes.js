const Model = require('../model/model');
const express = require('express');

const router = express.Router()

module.exports = router;


//Post Method


router.post('/todo', async (req, res) => {
    const data = new Model({    
        task: req.body.task,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})




//Get all Method

router.get('/todo', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Delete by ID Method

router.delete('/todo/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.task} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})




//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})


//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})
