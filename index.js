/*      DEPENDENCIES:

    npm i -D knex-cleaner
    npm i -D nodemon
    npm i -D eslint        -> (for errors)

    npm install express
    npm install knex
    npm install sqlite3

    npm i dotenv   -> (.env file)
    
    -----
    MIGRATIONS:

    instaniate a migration file:
    npx knex migrate:make initial-migration

    npx run migrate ---> This created my cook_book.db3 for me to view in sqLite.
    npx run rollback

*/


require("dotenv").config() //Allows for the port below to be used.

const server = require("./api/server")

const port = process.env.port || 4000

server.listen(port, () => {
    console.log("Listening on port: ", port)
})

