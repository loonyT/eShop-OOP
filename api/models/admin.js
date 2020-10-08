const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({ // schéma de données grâce à la méthode schéma de mongoose 
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: { 
        type: String, 
        unique: true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    createdAt: Date
});

module.exports = mongoose.model('Admin', adminSchema); // exportation du schéma en tant que modèle Mongoose 
