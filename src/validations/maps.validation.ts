import * as yup from "yup";

export const mapsValidation = yup.object({
  name: yup.string().required(),
  image: yup.string().required(),
})