const paypal = require('@paypal/checkout-server-sdk')
const {client} = require ('../lib/paypal_client')

const pay = async (req, res, next) => {
  const value = req.body.value
  try {
    const request = new paypal.orders.OrdersCreateRequest()

    request.headers["Prefer"] = "return=Representation"

    request.requestBody({
        intent:"CAPTURE",
        purchase_units:[
            {
                amount:{
                    value:value,
                    currency_code:"USD"
                }
            }
        ]
    })

    const response = await client.execute(request)

    return res.status(200).json({orderID:response.result.id})
  } catch (e) {
    next(e)
  }
};

module.exports = {
    pay
}