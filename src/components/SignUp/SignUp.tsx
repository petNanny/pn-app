import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  FormErrorMessage,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps } from "formik";
import { useRegisterMutation } from "../../redux/authApi";
import SignUpValidator from "./SignUpValidator";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const toast = useToast();

  if (isLoading) return <div>Loading</div>;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phone: "",
        avatar: "",
      }}
      validationSchema={SignUpValidator}
      onSubmit={async ({ firstName, lastName, userName, email, password, phone }, actions) => {
        try {
          await register({
            firstName,
            lastName,
            userName,
            email,
            password,
            phone,
          }).unwrap();
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
            containerStyle: { fontSize: "20px", width: "480px", padding: "10px" },
          });
          navigate("/chat");
          actions.setSubmitting(false);
        } catch (err: any) {
          toast({
            title: "Register failure.",
            description: `We cannot create account. Reason: ${err.data?.message}`,
            status: "error",
            duration: 9000,
            isClosable: true,
            containerStyle: { fontSize: "20px", width: "480px", padding: "10px" },
          });
          actions.setSubmitting(false);
        }
      }}
    >
      {(props) => (
        <Box width="480px">
          <Form>
            <Field name="firstName">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.firstName && form.touched.firstName)}>
                  <FormLabel htmlFor="firstName"></FormLabel>
                  <Input
                    {...field}
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    height="50px"
                    aria-label="firstName"
                  />
                  <FormErrorMessage data-testid="firstNameError">
                    {form.errors.firstName as string}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastName">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.lastName && form.touched.lastName)}>
                  <FormLabel htmlFor="lastName"></FormLabel>
                  <Input
                    {...field}
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    height="50px"
                    aria-label="lastName"
                  />
                  <FormErrorMessage data-testid="lastNameError">
                    {form.errors.lastName as string}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="userName">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.userName && form.touched.userName)}>
                  <FormLabel htmlFor="userName"></FormLabel>
                  <Input
                    {...field}
                    type="text"
                    id="userName"
                    placeholder="User name"
                    height="50px"
                    aria-label="userName"
                  />
                  <FormErrorMessage>{form.errors.userName as string}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
                    aria-label="email"
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
                      aria-label="password"
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
                  <FormErrorMessage data-testid="passwordError">
                    {form.errors.password as string}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }: FieldProps) => (
                <FormControl isInvalid={Boolean(form.errors.phone && form.touched.phone)}>
                  <FormLabel htmlFor="phone"></FormLabel>
                  <Input
                    {...field}
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    height="50px"
                    aria-label="phone"
                  />
                  <FormErrorMessage>{form.errors.phone as string}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              marginY={4}
              isLoading={props.isSubmitting}
              type="submit"
              backgroundColor="#00C38A"
              color="#ffffff"
              width="480px"
              height="50px"
            >
              Create account
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default SignUp;
