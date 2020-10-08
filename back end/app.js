const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');

mongoose.connect('mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD +'@cluster0-axd8v.mongodb.net/mystore?retryWrites=true&w=majority', {useNewUrlParser: true});
//connexion à la base de données 




const adminRoutes = require('./api/routes/admins');
const categoryRoutes = require('./api/routes/categories');
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');
const cartItemRoutes = require('./api/routes/cartItems');
const orderRoutes = require('./api/routes/orders');


// app Express = série de fonctions qui sont des middleware recevant les objets req et res sur lesquels elles peuvent faire des opérations ( modifier par ex) 

app.use(cors());
app.use(express.json());

// renvoit des catégories de collection dans la base de données => 

app.use('/admin', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/user', userRoutes); 
app.use('/products', productRoutes);
app.use('/cart', authenticate, cartItemRoutes);
app.use('/order', authenticate, orderRoutes);
app.use((req, res, next) => {  // next permet de passer à l'exécution du middleware suivant 
    res.status(404).json({
        message: 'Not Found' //ici on récupère un objet json avec le message spécifié , en faisant une requète au serveur 
    })
})


module.exports = app;
