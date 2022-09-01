const stripeService = require("../services/stripe.services");

const pay = async (req, res, next) => {
  try {
    const stripeProduct = await stripeService.createProduct(req.body);
    console.log(stripeProduct.default_price)
    const stripeResponse = await stripeService.createCheckoutSession(stripeProduct.default_price);
    return res.status(200).json(stripeResponse);
  } catch (e) {
    //return res.status(404).json({ message: e.message });
    next(e)
  }
};

module.exports = {
    pay
}
