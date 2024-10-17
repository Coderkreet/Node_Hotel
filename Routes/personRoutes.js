const express = require('express')
const router = express.Router();
const person = require('../Models/Person')

router.post('/',async (req,res)=>{

    try {
        const data = req.body;
    
    const newPerson = new person(data);
    const response = await newPerson.save()
    console.log("data save");
    res.status(200).json(response)
    
    } catch (error) {
        console.log('Error Enternal Server Error' , error);
    }
    })
    
    router.get('/',async (req , res)=>{
        try {
        const data = await person.find();
        console.log('Data finded');
        res.status(200).json(data);
        
        
        } catch (error) {
            console.log('Error when we get the data' ,error );
            
        }
        })

// Update

router.put('/:id', async(req,res)=>{
try {
    const personId = req.params.id;
    const updetedData = req.body

    const responce = await person.findByIdAndUpdate(personId , updetedData ,{
        new:true,
        runValidators:true
    })
    if (!responce) {
        return res.status(404).json("person Not found");
    }
    res.status(200).json(responce)
    console.log("data Updated");

}catch (error) {
    console.log('Error when we get the data' ,error );
    
}

})

router.delete('/:id' , async (req,res)=>{

try {
    const Data = req.params.id;

    const Deletedrecord = await person.findByIdAndDelete(Data);
    res.status(200).json(Deletedrecord)
    console.log("data Deleted");
    if (!Deletedrecord) {
        return res.status(404).json("person Not found");
    }

}catch (error) {
    console.log('Error when we get the data' ,error );
    
}

})

        router.get('/:WorkType',async (req , res)=>{
            try {
                const WorkType = req.params.WorkType;
                if (WorkType =="chef" || WorkType == "Customer" || WorkType == "Manager") {
                    const data = await person.find({Work:WorkType});
                    console.log('Data finded');
                    res.status(200).json(data);
                }    
            } catch (error) {
                console.log('Error when we get the data' ,error );
                
            }
            })


            module.exports = router; 
