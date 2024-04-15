import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;

    try {
        connectToDB();
        const userCount = await Users.find({ username: { $regex: regex } }).count();
        const users = await Users.find({ username: { $regex: regex } }).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return users;
    } catch (error) {
        throw new Error(error);
    }
}