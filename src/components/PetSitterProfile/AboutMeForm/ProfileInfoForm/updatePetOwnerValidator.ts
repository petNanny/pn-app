import * as Yup from "yup";

const nameRegExp = /^[A-Za-z][A-Za-z0-9_-]{1,24}$/;

const updatePetOwnerInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      nameRegExp,
      "Must begin with a letter. Can contain letters, numbers, underscores and hyphens"
    )
    .min(4, "4 to 24 characters.")
    .max(24, "4 to 24 characters.")
    .required("Required"),
  lastName: Yup.string()
    .matches(
      nameRegExp,
      "Must begin with a letter. Can contain letters, numbers, underscores and hyphens"
    )
    .min(4, "4 to 24 characters.")
    .max(24, "4 to 24 characters.")
    .required("Required"),
  userName: Yup.string()
    .matches(
      nameRegExp,
      "Must begin with a letter. Can contain letters, numbers, underscores and hyphens"
    )
    .min(4, "4 to 24 characters.")
    .max(24, "4 to 24 characters."),
});

export default updatePetOwnerInfoSchema;
