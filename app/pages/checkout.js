const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const metadata = {
    title: 'Checkout'
}
async function handler(req, res) {
    const {uid , cart } = req.body
    console.log('Checking out')

}


export default handler


