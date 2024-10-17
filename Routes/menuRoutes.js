const express = require('express')
const rout = express.Router();
const Manu = require('../Models/Manu')

rout.post('/', async (req,res)=>{
try {
    const data = req.body
const newManu = new Manu(data);
const response = await newManu.save();
res.status(200).json(response)

} catch (error) {
    res.status(500).json("Internal Server Error")
}
})


rout.get('/',async (req,res)=>{

    try {
        const data = await Manu.find();
res.status(200).json(data)
    }  catch (error) {
        res.status(500).json("Internal Server Error");
    }
})

rout.get('/:Test',async (req,res)=>{
try {
    const Test = req.params.Test;
    if (Test == 'sweet'||Test == 'spicy'||Test == 'salty') {
        const data = await Manu.find({test:Test})
        res.status(200).json(data)
    }

}  catch (error) {
    res.status(500).json("Internal Server Error");
}

})


module.exports = rout;