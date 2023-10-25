const assert = require("assert");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const ProductModel = require("../schema/product.model");
const Definer = require("../lib/mistake");

class Product {
    constructor() {
        this.productModel = ProductModel;
    }

    async addNewProductData(data, member) {
        try {
            data.restaurant_mb_id = shapeIntoMongooseObjectId(member._id);
            // console.log(data);

            const new_product = new this.productModel(data);
            const result = await new_product.save();

            assert.ok(result, Definer.product_err2);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Product;