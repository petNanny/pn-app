import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Button,
  Box,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { StyledLoginBox, StyledButton } from "./styledLogin";
import { Formik, Field, Form, FieldProps } from "formik";
import { useDispatch } from "react-redux";
import { setCredential } from "../../store/reducer/authSlice";
import { useLoginMutation } from "../../redux/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginValidator from "./LoginValidator";

type FormikValueInputType = {
  email: string;
  password: string;
};

type FormikSubmitActionType = {
  setSubmitting: (value: boolean) => void;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const toast = useToast();
  const handleFormikSubmit = useCallback(
    async ({ email, password }: FormikValueInputType, actions: FormikSubmitActionType) => {
      try {
        const accessToken = await login({ email, password }).unwrap();
        dispatch(setCredential({ accessToken }));
        toast({
          title: "Login success.",
          description: "You've been successful login your account",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        navigate("/chat");
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
                    height="50px"
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
                      height="50px"
                      autoComplete="off"
                      aria-label="passwordInput"
                    />
                    <InputRightElement
                      cursor="pointer"
                      marginTop="1"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible fontSize="28" color="#4F4F4F" />
                      ) : (
                        <AiOutlineEye fontSize="28" color="#4F4F4F" />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password as string}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <StyledButton isLoading={props.isSubmitting} type="submit">
              Login
            </StyledButton>
            <Flex justifyContent="center">
              <Text cursor="pointer" _hover={{ textDecoration: "underline" }}>
                Forgot your password?
              </Text>
            </Flex>
          </Form>
        </StyledLoginBox>
      )}
    </Formik>
  );
};

export default Login;
