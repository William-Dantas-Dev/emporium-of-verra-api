import * as yup from "yup";

export const skillTreeValidation = yup.object({
  name: yup.string().required().min(3).max(40),
  description: yup.string().required().min(3).max(100),
  backgroundImage: yup.string().required().min(3).max(200),
})