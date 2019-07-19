let Cliente = require('../modelos/cliente.js');

//Creamos la clase controladora para manjar la informacion de los clientes
class ClienteControlador {

    constructor() {   

    }

    consultaCliente(req, res) {
        let id = req.params.id;
        Cliente.consultarCliente(id, (err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }

    consultaClientes(req, res) {
        Cliente.consultarClientes((err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }        
    
}

const instanciaControlador = new ClienteControlador();

module.exports  = instanciaControlador;