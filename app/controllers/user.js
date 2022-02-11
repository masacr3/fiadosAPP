const model = require('../models/user')

exports.getData = (req, res) =>{
    /*
    model.find({},(err, docs)=>{
        res.send( { docs })
    })
    */
   res.send({data : "ok"})
}

exports.insertData = (req, res) =>{
    const data = req.body
    model.create(data, (err, docs) =>{
        res.send({gg: docs})
    })
}