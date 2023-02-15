import * as Yup from "yup";

const nameRegExp = /^[A-Za-z][A-Za-z0-9_-]{1,24}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignUpSchema = Yup.object().shape({
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

  email: Yup.string().email("Please input a valid email").required("Required"),
  password: Yup.string()
    .matches(
      passwordRegExp,
      "Must include uppercase and lowercase letters, a number and a special character. Allowed special characters: !@#$%"
    )
    .min(8, "Password must be 8 or more characters")
    .required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Must a valid phone number"),
});

export default SignUpSchema;
