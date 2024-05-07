const express = require('express')
const app = express()

app.get('/leibniz/:n', function (req, res) {
    const cantidad = parseInt(req.params.n);
    var resultado = 0;
    var signo = 1;
    for(let i=0;i<=cantidad;i++){
        let termino = signo * 4 / (2 * i + 1);
        resultado += termino;
        res.write(resultado + " ");
        signo = -signo;
    }
    res.end(" " + resultado);
    
  
})

app.listen(3000)