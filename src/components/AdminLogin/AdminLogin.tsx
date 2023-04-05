import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { StyledLoginBox, StyledButton } from "./styledAdminLogin";
import { Formik, Field, Form, FieldProps } from "formik";
import { useStoreDispatch } from "../../store/hook";
import { setCredential } from "../../store/reducer/adminAuthSlice";
import { updateAdminUserInfo } from "../../store/reducer/adminUserSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginValidator from "./AdminLoginValidator";
import { useAdminLoginMutation } from "../../redux/adminApi";
import { toggleShowAdminHomepage } from "../../store/reducer/adminSlice";

type FormikValueInputType = {
  email: string;
  password: string;
};

type FormikSubmitActionType = {
  setSubmitting: (value: boolean) => void;
};

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const toast = useToast();
  const dispatch = useStoreDispatch();
  const handleFormikSubmit = useCallback(
    async ({ email, password }: FormikValueInputType, actions: FormikSubmitActionType) => {
      try {
        const response = await adminLogin({ email, password }).unwrap();
        dispatch(toggleShowAdminHomepage());
        dispatch(setCredential(response));
        dispatch(updateAdminUserInfo(response.currentAdmin));
        toast({
          title: "Login success.",
          description: "You've been successful login your account",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        navigate("/adminPage");
        actions.setSubmitting(false);
      } catch (err) {
        toast({
          title: "Login failure.",
          description: "Email or password is incorrect.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        actions.setSubmitting(false);
      }
    },
    []
  );
  if (isLoading) return <div>Loading</div>;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginValidator}
      onSubmit={handleFormikSubmit}
    >
      {(props) => (
        <StyledLoginBox>
          <Form>
            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.email && form.touched.email)}>
                  <FormLabel htmlFor="email"></FormLabel>
                  <Input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Email"
                    aria-label="emailInput"
                  />
                  <FormErrorMessage data-testid="emailError">
                    {form.errors.email as string}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.password && form.touched.password)}>
                  <FormLabel htmlFor="password"></FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Password"
                      autoComplete="off"
                      aria-label="passwordInput"
                    />
                    <InputRightElement onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password as string}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <StyledButton isLoading={props.isSubmitting} type="submit">
              Login
            </StyledButton>
          </Form>
        </StyledLoginBox>
      )}
    </Formik>
  );
};

export default AdminLogin;
