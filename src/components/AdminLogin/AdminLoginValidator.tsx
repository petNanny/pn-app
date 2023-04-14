import * as Yup from "yup";
const AdminLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email")
    .max(50, "Please input a valid email")
    .required("Required"),
  password: Yup.string().required("Required"),
});

export default AdminLoginSchema;
