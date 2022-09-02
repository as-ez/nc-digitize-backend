const config = require("../config/index");
const stripe = require("stripe")(config.stripe.stripeSecretKey);

const createCheckoutSession = async (url) => {
    
    console.log(url)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: url,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "https://c6-02-m-mern-ten.vercel.app/final-confirmation-page",
      cancel_url: "https://c6-02-m-mern-ten.vercel.app",
    });
    console.log(session.url);

    return session.url;
};

const createProduct = async (body) => {
    const { name, default_price_data, description } = body
    ;
    const price = Number.parseInt(default_price_data) * 100;
    console.log(price)
    const data = {
        
      name: name,
      default_price_data: {
        unit_amount: price,
        currency: "USD",
      },
      description: description,
    };
    const stripeProduct = await stripe.products.create(data);
    
    return stripeProduct;
};

module.exports = {
  createCheckoutSession,
  createProduct,
};
