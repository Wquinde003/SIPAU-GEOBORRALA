const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SIPAUGB',
    password: 'plataformasWEB',
    port: 5432
})

module.exports = pool