const config = require('../config/index')
const stripe = require('stripe')(config.stripe.stripeSecretKey)

const createCheckoutSession = async (req,res,next) => {
    const domain = 'http://localhost:4000';
    try{
        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price:'price_1Lc7iFDEkmmQJZzOt1nsOLRL',
                    quantity:1
                }
            ],
            mode:'payment',
            success_url:`${domain}/`,
            cancel_url:`${domain}/`
        })
        console.log(session.url)

        return res.redirect(303, session.url)
    }catch(e){
        next(e)
    }
}

module.exports = {
    createCheckoutSession
}