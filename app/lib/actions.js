"use server";

import { revalidatePath } from "next/cache";
import { Products, Users } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new Users({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        });

        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || undefined) && delete updateFields[key])

        await Users.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Users.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users");
}

export const addProduct = async (formData) => {
    const { title, description, price, stock, color, size } = Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Products({
            title, description, price, stock, color, size
        });

        await newProduct.save();
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const updateProduct = async (formData) => {
    const { id, title, description, price, stock, color, size, } = Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            id, title, description, price, stock, color, size,
        }

        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || undefined) && delete updateFields[key])

        await Products.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Products.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products");
}

export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        if (error.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
          }
          throw error;
    }
}