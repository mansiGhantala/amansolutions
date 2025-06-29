const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least of 3 characters."})
    .max(255, {message: "Email  must not be more then  255 characters"}),
  password: z
    .string({required_error: "password is required"})
    .min(7, {message: "password must be at least of 6 chars."})
    .max(1024,  "Password can't be greater then 1024  characters")
});

// craeting an object Schema 
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 chars."})
    .max(255, {message: "Name  must not be more then  255 characters"}),
    email: z
    .string({ required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least of 3 chars."})
    .max(255, {message: "Email  must not be more then  255 characters"}),
  phone: z
    .string({required_error: "phone is required"})
    .trim()
    .min(10, {message: "phone must be at least of 10 chars."})
    .max(20, {message: "phone  must not be more then  20 characters"}),
   password: z
    .string({required_error: "password is required"})
    .min(7, {message: "password must be at least of 7 chars."})
    .max(1024, {message: "password  must not be more then 1024 characters"})
});

// // create for login

module.exports = { signupSchema,  loginSchema};