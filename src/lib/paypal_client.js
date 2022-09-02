const paypal = require('@paypal/checkout-server-sdk')
const config = require("../config/index");

const enviroment = new paypal.core.SandboxEnvironment(config.paypal.clientID, config.paypal.clientSecret);

const client = new paypal.core.PayPalHttpClient(enviroment)

module.exports = {
    client
}