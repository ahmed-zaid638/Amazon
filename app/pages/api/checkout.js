'use client'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const metadata = {
    title: 'Checkout'
}
async function handler(req, res) {
    const { uid, cart } = req.body
    // changedData
    const changedData = cart.map((item) => ({
        quantity: 1,
        price_data: {
            currency: "USD",
            unit_amount: item.price * 100,
            product_data: {
                name: item.name,
                description: item.description,
                images: [item.image],
            },
        },
    }));
    // session 
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: changedData,
        mode: 'payment',
        shipping_address_collection: {
            allowed_countries: ["US"],
        },
        success_url: `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}/cancel`,
        metadata: {
            userId: uid,
            images: JSON.stringify(cart.map((item) => item.image)),
        },
    })
    res.status(200).json({ id: session.id });
}

export default handler











