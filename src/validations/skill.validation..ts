import * as yup from "yup";

export const registerChooseablePassiveValidation = yup.object({
  image: yup.string().required().min(3),
  name: yup.string().required().min(3).max(40),
  description: yup.string().required().min(3).max(100),
})

export const registerSkillValidation = yup.object({
  image: yup.string().required().min(3),
  name: yup.string().required().min(3).max(40),
  description: yup.string().required().min(3),
  isActiveSkill: yup.boolean(),
  level: yup.number().nullable(),
  cooldown: yup.number().nullable(),
  range: yup.number().nullable(),
  position: yup.number().required(),
  registerChooseablePassiveValidation: yup.array().of(registerChooseablePassiveValidation),
})