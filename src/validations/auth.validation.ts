import * as yup from "yup";

export const authValidation = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
})

export const registerUserValidation = yup.object({
  name: yup.string().required().min(3).max(40),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
  admin: yup.boolean(),
})

export const characterValidation = yup.object({
  nick: yup.string().required().min(3).max(20),
  server: yup.string().required(),
})