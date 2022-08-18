//A db-config: (DataBase configuration)
//Where the decision of which environment to use is made. **

const knex = require("knex")
const configurations = require("../knexfile.js")

const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configurations[environment])


