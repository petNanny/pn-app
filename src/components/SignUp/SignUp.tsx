import { useState, useCallback } from "react";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  FormErrorMessage,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { StyledSignUpBox, StyledButton } from "./styledSignUp";
import { Formik, Field, Form, FieldProps } from "formik";
import { useRegisterMutation } from "../../redux/authApi";
import SignUpValidator from "./SignUpValidator";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import VerifyModal from "./components/VerifyModal/VerifyModal";
import { useNavigate } from "react-router-dom";

type FormikValueInputType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phone: string;
};

type FormikSubmitActionType = {
  setSubmitting: (value: boolean) => void;
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [register, { isLoading }] = useRegisterMutation();
  const toast = useToast();
  const navigate = useNavigate();

  const handleFormikSubmit = useCallback(
    async (
      { firstName, lastName, userName, email, password, phone }: FormikValueInputType,
      actions: FormikSubmitActionType
    ) => {
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
          description:
            "We've created your account for you, please verify it using your registered email.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        navigate("/login");
        actions.setSubmitting(false);
        onOpen();
      } catch (err: any) {
        toast({
          title: "Register failure.",
          description: `We cannot create account. Reason: ${err.data?.message}`,
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
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        phone: "",
      }}
      validationSchema={SignUpValidator}
      onSubmit={handleFormikSubmit}
    >
      {(props) => (
        <StyledSignUpBox>
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
                      aria-label="password"
                    />
                    <InputRightElement onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
                  <Input {...field} type="text" id="phone" placeholder="Phone" aria-label="phone" />
                  <FormErrorMessage>{form.errors.phone as string}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <StyledButton isLoading={props.isSubmitting} type="submit">
              Create account
            </StyledButton>
          </Form>
          <VerifyModal onClose={onClose} isOpen={isOpen} />
        </StyledSignUpBox>
      )}
    </Formik>
  );
};

export default SignUp;
