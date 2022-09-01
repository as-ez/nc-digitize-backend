const config = require("../config/index");
const stripe = require("stripe")(config.stripe.stripeSecretKey);

const createCheckoutSession = async (req, res, next) => {
  const domain = "http://localhost:4000";
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1Lc7iFDEkmmQJZzOt1nsOLRL",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://c6-02-m-mern-ten.vercel.app/final-confirmation-page",
      cancel_url: "https://c6-02-m-mern-ten.vercel.app/final-confirmation-page"
    });
    console.log(session.url);

    return res.status(200).json(session.url);
  } catch (e) {
    next(e);
  }
};

const createProduct = async (req, res) => {
  try {
    const {name, default_price_data, description} = req.body
    const price = Number.parseInt(default_price_data)
    const data = {
      name: name,
      default_price_data: {
        unit_amount: price * 100,
        currency: "USD",
      },
      description:description,
    };

    const stripeProduct = await stripe.products.create(data);
    return res.status(200).json(stripeProduct);
  } catch (e) {
    return res.status(404).json(e.message);
  }
};

module.exports = {
  createCheckoutSession,
  createProduct,
};
