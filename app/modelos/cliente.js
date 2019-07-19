const db = require('../../bd/bd');
const sql = db.connection;

//Creamos un objeto de la tabla para proteger y enmascarar los nombres de la base de datos
const table = {
    name    :"clientes",    
    fields  : {
        id          :   "id_cliente",
        nombres     :   "nombre_cliente",
        documento   :   "documento_cliente",
        profesion   :   "profesion_cliente"
    }
}
//Creamos la clase Cliente para empezar a crear las respectivas funcionalidades.
class Cliente {
    
    constructor(id,nombres,documento,profesion) {
        if (id) {
            this.id     = id;    
        }        
        this.nombres    = nombres;
        this.documento  = documento;
        this.profesion  = profesion;
    }

    static mapFactory(entity){
        let mp = {};
        if(entity){
            mp = new Cliente(
                entity.id_cliente,
                entity.nombre_cliente,
                entity.documento_cliente,
                entity.profesion_cliente
            );
        }        
        return mp;
    }

    static consultarCliente(id, callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+' ';
        query += 'WHERE '+table.fields.id+'='+id+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let cliente = Cliente.mapFactory(result[0]);                                                                                          
                    console.log(cliente);                          
                    callback(null,cliente);
                }
            })
        }else{
            throw "Problema conectado con Mysql en consultarCliente";
        } 
    }

    static consultarClientes(callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let clientes = [];
                    for(let entity of result){
                        let cliente = Cliente.mapFactory(entity);                        
                        clientes.push(cliente);
                    }                                              
                    console.log(clientes);                          
                    callback(null,clientes);
                }
            })
        }else{
            throw "Problema conectado con Mysql";
        } 
    }
}

module.exports = Cliente;