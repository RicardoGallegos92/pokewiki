const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app= express();
const port = 8080;
app.use(express.json());

app.use(cors());

//ahora tengo que hacer que chupetée una .bd
app.get('/', (req, res) => {
    res.json([{
        "nombre":'Jotaro Kujo',
        "stand": 'Star Platinum'
    },
    {
        "nombre":'Kakyoin Noriaki',
        "stand": 'Hierophant Green'
    }]);
});

routerApi(app);

app.listen(port, () => {
    console.log("\nServer en localhost:"+port+" funcionanding\n");
})