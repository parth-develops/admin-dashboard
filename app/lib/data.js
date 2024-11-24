import { Users, Products } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;

    try {
        connectToDB();
        const userCount = await Users.find({ username: { $regex: regex } }).count();
        const users = await Users.find({ username: { $regex: regex } }).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return { userCount, users: JSON.parse(JSON.stringify(users)) };
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await Users.findById(id);
        return JSON.parse(JSON.stringify(user));
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
        return { productCount, products: JSON.parse(JSON.stringify(products)) };
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Products.findById(id);
        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        throw new Error(error);
    }
}