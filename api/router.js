module.exports = (app) => {

//Funciones que responden a los metodos GET POST PUT DELETE
app.get('/', function (req, res) {
    let persona = {
        'nombre': 'Orlando',
        'edad'  : 30
    };
    res.send(persona);
  });

app.post('/personas', (req, res)=>{
    let nombre = req.body.nombre;
    let edad   = req.body.edad;
    let miPersona = {
        'elNombre' : nombre,
        'laEdad'   : edad
    };
    res.send(miPersona);
});

}