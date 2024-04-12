import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        connectToDB();
        const users = await Users.find();
        return users;
    } catch (error) {
        throw new Error(error);
    }
}