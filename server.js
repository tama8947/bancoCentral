const express    = require('express');
const bodyParser = require('body-parser');
//Instanciamos express como servidor para emepzar a utilizar su potencia
const app = express();
//Uso de Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Funciones que responden a los metodos GET POST PUT DELETE
app.get('/', function (req, res) {
    res.send('Hello World!');
  });

//Iniciamos el servidor escuchando por el puerto 3500 
app.listen(3500, function(){
    console.log('EL servidor esta corriendo por el puerto 3500');
});