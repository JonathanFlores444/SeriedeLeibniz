const express = require('express')
const app = express()

app.get('/leibniz/:n', function (req, res) {
    const cantidad = parseInt(req.params.n);
    var resultado = 0;
    var masmenos = 1;
    for(let i=0;i<=cantidad;i++){
        resultado += masmenos * 4 / (2 * i + 1);
        masmenos = -masmenos;
    }
  res.send(""+resultado);
})

app.listen(3000)