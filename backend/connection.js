const {Client} =require('pg')

const connection= new Client ({
    host: 'localhost',
    user: 'postgres',
    port:5432,
    password:'123',
    database: 'Senior'
})
module.exports = connection;