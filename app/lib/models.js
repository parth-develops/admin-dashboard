import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
}, { timestamps: true });

const productSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 24,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

export const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
export const Products = mongoose.models.Products || mongoose.model("Products", productSchema);