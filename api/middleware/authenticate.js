
//grâce à ces lignes de code, seul les requètes authentifiées seront gérées. 


const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

    try{ // puisque de nombreuses erreurs peuvent apparaitre, le bloc try catch est nécessaire pour cette étape. 

         //Extract Authorization Token
      
        const token = req.headers["auth-token"];
          // après l'extraction du Token, il faut le décoder 
        const decoded = jwt.verify(token, 'mysecretkey');
        next(); // passage à l'exécution grâce à la fonction next 

    }catch(error){
        res.status(500).json({
            error: error
        });
    }
   

}

module.exports = authenticate;
