const mongoose = require('mongoose')

const userScheme = new mongoose.Schema(
    {
        user : {
            type: String
        },

        lista: {
            type: Array
        },

        total : {
            type : Number
        }
    }
)

module.exports = mongoose.model('clientes',userScheme)