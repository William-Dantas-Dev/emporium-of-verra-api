import * as yup from "yup";

export const skillConnectionValidation = yup.object({
  startPosition: yup.string().required(),
  midPosition: yup.string(),
  endPosition: yup.string().required(),
  startAnchor: yup.string().required(),
  endAnchor: yup.string().required(),
  skillClassId: yup.number(),
  weaponClassId: yup.number(),
})