const express = require('express')
const config = require('./config')
const { connect } = require('mongoose');
const router = require("./api/routes/index.routes");
const { error_handler } = require('./api/middlewares');

const app = express()


const run = async () => {

    const port = config.port || 5000
    app.use(express.json())

    await connect(`${config.mongo_url}`);

    app.use('/api', router)
    app.use(error_handler)



    app.listen(port, () => {
        console.log(`server run on ${port}`);
    })
}

run()