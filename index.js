let app = require('./app')
require('dotenv').config()

async function main () {
    app
    console.log(`Server running on port ${process.env.PORT || 81}` )

}

main()