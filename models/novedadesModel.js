const { createPool } = require("mysql");
var connection = require('./bd');

/* Sirve para listar lsa novedades*/
async function getNovedades() { 
    var query = 'select * from novedades';
    var rows = await connection.query(query);
    return rows;
};

async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await connection.query(query, [id]);
    return rows;
};

async function insertNovedad(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await connection.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

/* Traigo datos para modificar una sola novedad */
async function getNovedadById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await connection.query(query, [id]);
    return rows[0];
};

/* UPDATE */
async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id = ?';
        var rows = await connection.query(query, [obj, id]);
        return rows;
    } catch(error) {
        throw error;
    };
};


module.exports = {getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificarNovedadById};