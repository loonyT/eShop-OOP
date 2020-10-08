const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);


//req et res sont des objets qu'on passe en paramètre de la fonction createServer. 
// on envoit une réponse de type string grâce à res.end 
// on écoute la variable d'environement ou le port 3000 qu'on utilise ici comme serveur de déploiement

// => utiliser nodemon pour pas restart sans cesse et postman pour vérifier la réponse du serveur 
