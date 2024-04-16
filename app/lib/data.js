import { Users, Products } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;

    try {
        connectToDB();
        const userCount = await Users.find({ username: { $regex: regex } }).count();
        const users = await Users.find({ username: { $regex: regex } }).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return {userCount, users};
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;

    try {
        connectToDB();
        const productCount = await Products.find({ title: { $regex: regex } }).count();
        const products = await Products.find({ title: { $regex: regex } }).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return {productCount, products};
    } catch (error) {
        throw new Error(error);
    }
}