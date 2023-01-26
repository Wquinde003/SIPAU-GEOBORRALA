const pool = require('./../../bd')

async function getResidentes() {
    let results = null
    results = await pool.query('select * from residente')
    return results.rows
}

async function getResidenteID(filtro) {
    filtro = parseInt(filtro);
    let results = null
    results = await pool.query('select * from residente where idresidente = $1', [filtro])
    return results.rows
}

async function getResidenteNombre(filtro) {
    filtro = String(filtro);
    let results = null
    results = await pool.query("select * from residente where nombdueño like '"+ filtro +"%'")
    return results.rows
}


async function add_residente(residente) {
    filtro = (residente);
    let results = await pool.query('insert into residente(manzana, villa, cidueño, nombdueño, apedueño, ciresidente, nombresidente, aperesidente, celularresidente, emailresidente, fecha) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [filtro.manzana, filtro.villa, filtro.cidueño, filtro.nombdueño, filtro.apedueño, filtro.ciresidente, filtro.nombresidente, filtro.aperesidente, filtro.celularresidente, filtro.emailresidente, filtro.fecha])
    return residente
}

async function update_residente(residente) {
    filtro = (residente);
    let results = await pool.query('update residente set manzana=$2, villa=$3, cidueño=$4, nombdueño=$5, apedueño=$6, ciresidente=$7, nombresidente=$8, aperesidente=$9, celularresidente=$10, emailresidente=$11, fecha=$12 where idresidente=$1', [filtro.idresidente, filtro.manzana, filtro.villa, filtro.cidueño, filtro.nombdueño, filtro.apedueño, filtro.ciresidente, filtro.nombresidente, filtro.aperesidente, filtro.celularresidente, filtro.emailresidente, filtro.fecha])
    return residente
}

async function delete_residente(residente) {
    filtro = (residente);
    let results = await pool.query('delete from residente where idresidente=$1', [filtro])
    return residente
}

module.exports = {
    add: add_residente,
    get: getResidentes,
    getxNombre: getResidenteNombre,
    getxId: getResidenteID,
    update: update_residente,
    delete: delete_residente,
}
