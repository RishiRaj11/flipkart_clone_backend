import Product from '../model/product_schema.js';

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        // console.log(products)
        response.status(200).json(products)
        // response.status(200).json({ message: "Data featched successfully" })
    } catch (error) {
        response.status(500).json({ message: error })
    }
}



export const getProductByid = async (request, response) => {
    try {
        const id = request.params.id;
       // console.log("Hello")
        const product = await Product.findOne({ 'id': id });

        response.status(200).json(product)
        // response.status(200).json({ message: "Data featched successfully" })
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}