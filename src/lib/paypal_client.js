const paypal = require('@paypal/checkout-server-sdk')
const config = require("../config/index");

const env = process.env.NODE_ENV
const enviroment =  env === "development" ? new paypal.core.SandboxEnvironment(config.paypal.clientID, config.paypal.clientSecret):new paypal.core.LiveEnvironment(config.paypal.clientID, config.paypal.clientSecret);

const client = new paypal.core.PayPalHttpClient(enviroment)

module.exports = {
    client
}