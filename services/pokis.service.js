const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/pokimanz.db');
let cadenaPrueba = [];

function pushear(elJson){
    cadenaPrueba.push(elJson);
};

class pokiService{
    constructor(){
        this.pokis = [];
        this.pokestring = [{}];
        this.generate();
    }

    generate(){
        db.serialize(function(){
            let indice=0;
            db.each("SELECT id, nombre, tipo1, tipo2 FROM pokimanz ORDER BY id",
            function(err, row){
                //console.log(row.id+" : "+row.nombre+" : "+row.tipo1+" : "+row.tipo2);
                pushear(row);
            });
        });
        db.close();
        this.pokis=cadenaPrueba;
        return this.pokis;
    }

    async add(row){
        this.pokis.push({
            "pokedex_id":row.id,
            "nombre":row.nombre,
            "tipo1":row.tipo1,
            "tipo2":row.tipo2
        });
    }

    async find(){
        return this.pokis;
    }
}

module.exports = pokiService;