const express = require('express')
const config = require('./config')
const {connect} = require('mongoose');
const router = require("./api/routes/index.routes")

const app = express()


const run = async () => {

    const port = config.port || 5000

    await connect(`${config.mongo_url}`);

    app.use('/api', router)






    app.listen(port, () => {
        console.log(`server run on ${port}`);
    })
}

run()