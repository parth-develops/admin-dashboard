import { revalidatePath } from "next/cache";
import { Users } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) => {
    "use server";

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new Users({
            username, email, password, phone, address, isAdmin, isActive
        });

        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users");
}