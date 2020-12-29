const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:brigade@localhost:5433/brigade'
const pool = new Pool({
  connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})