import * as yup from "yup";

export const userValidation = yup.object({
  name: yup.string().required().min(3).max(40),
  nick: yup.string().required().min(3).max(20),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(20),
  admin: yup.boolean(),
})