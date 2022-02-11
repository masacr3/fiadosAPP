const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost/fiados'

module.exports = () =>{
    
    const connect = () =>{
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) =>{
                if(err){
                    console.log('error base datos')
                }
                else{
                    console.log('coneccion correcta!!')
                }
            }
        )
    }

    connect()
}