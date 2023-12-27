require('dotenv/config')

const {env} = process;

const config = {
    port: env.PORT,
    jwt_secret_key: env.JWT_SECRET_KEY,
    mongo_url: env.mongo_url
};

module.exports = config;