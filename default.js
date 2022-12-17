import products from "./constrants/data.js";
import Product from "./model/product_schema.js";

const defaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("Inserted successfully");
    } catch (error) {
        console.log("Error while inserting default data", error);
    }
}

export default defaultData;