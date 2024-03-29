

export const getProducts = async (id) => {
    const products = await fetch(
        `https://www.screentechnicals.com/api/ecommerce/products`,
        { next: { revalidate: 1000000 } }
    );
    return products.json();
};

export const getSingleProduct = async (id) => {
    const product = await fetch(
        `https://www.screentechnicals.com/api/ecommerce/products/${id}`,
        { next: { revalidate: 10000000 } }
    );
    return product.json();
};



