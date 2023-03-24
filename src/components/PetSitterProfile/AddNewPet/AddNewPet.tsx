import FormWrapper from "../FormWrapper/FormWrapper";
import {
  Stack,
  FormControl,
  FormLabel,
  Text,
  Input,
  useToast,
  Button,
  Select,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { petData } from "../../../interfaces/petData";
import { GenderOptionBtn, StyledCheckbox, CheckItemText } from "./styledAddNewPet";
import { useState } from "react";
import addPetSchema from "../../../schemas/addPetValidator";

const AddNewPet = () => {
  const toast = useToast();
  const [genderValue, setGenderValue] = useState("Male");
  const { values, handleChange, handleSubmit, errors, touched, handleBlur, setFieldValue } =
    useFormik({
      initialValues: {
        avatar:
          "https://icon-library.com/images/2018/7702845_dog-pawprint-plantillas-de-tatuajes-temporal-png-download.png",
        name: "",
        species: "Dog",
        breed: "",
        size: "Medium",
        gender: "Male",
        yearOfBirth: new Date().getFullYear(),
        neutered: false,
        vaccinated: false,
        chipped: false,
        houseTrained: false,
        friendlyWithDogs: false,
        friendlyWithCats: false,
        friendlyWithKids: false,
        friendlyWithAdults: false,
        description: "",
      },
      // validationSchema: updatePetOwnerValidator,
      onSubmit: async (values: petData) => {
        values.gender = genderValue;
        console.log(values);
        // try {
        //   await updatePetOwner({
        //     ...data,
        //     firstName: values.firstName,
        //     lastName: values.lastName,
        //     userName: values.userName,
        //   }).unwrap();
        //   toast({
        //     title: "Your info changed.",
        //     description: "We've changed your info for you.",
        //     status: "success",
        //     duration: 9000,
        //     isClosable: true,
        //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        //   });
        // } catch (error) {
        //   toast({
        //     title: "Your info changed error.",
        //     description: "We've can't change your info for you.",
        //     status: "error",
        //     duration: 9000,
        //     isClosable: true,
        //     containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        //   });
        // }
      },
    });

  const formBooleanData = [
    {
      text: "Neutered",
      name: "neutered",
      value: values.neutered,
    },
    {
      text: "Chipped",
      name: "chipped",
      value: values.chipped,
    },
    {
      text: "Vaccinated",
      name: "vaccinated",
      value: values.vaccinated,
    },
    {
      text: "House trained",
      name: "houseTrained",
      value: values.houseTrained,
    },
    {
      text: "Friendly with dogs",
      name: "friendlyWithDogs",
      value: values.friendlyWithDogs,
    },
    {
      text: "Friendly with cats",
      name: "friendlyWithCats",
      value: values.friendlyWithCats,
    },
    {
      text: "Friendly with kids",
      name: "friendlyWithKids",
      value: values.friendlyWithKids,
    },
    {
      text: "Friendly with adults",
      name: "friendlyWithAdults",
      value: values.friendlyWithAdults,
    },
  ];

  const handleMaleBtn = () => {
    setGenderValue("Male");
  };
  const handleFemaleBtn = () => {
    setGenderValue("Female");
  };

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 40; year--) {
    years.push(year);
  }

  return (
    <FormWrapper title="Your pets">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl marginBottom="4">
          <FormLabel color="#939393" fontWeight="md">
            Name
          </FormLabel>
          <Input
            id="name"
            name="name"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <Text color="red" fontSize="sm" padding="1">
              {errors.name}
            </Text>
          ) : null}
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel color="#939393" fontWeight="md">
            Species
          </FormLabel>
          <Select
            id="species"
            name="species"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.species}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Ferret">Ferret</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Guinea pig">Guinea pig</option>
            <option value="Bird">Bird</option>
            <option value="Reptile">Reptile</option>
            <option value="Farm animal">Farm animal</option>
            <option value="Horse">Horse</option>
            <option value="Other">Other</option>
          </Select>
          {errors.species && touched.species ? (
            <Text color="red" fontSize="sm" padding="1">
              {errors.species}
            </Text>
          ) : null}
        </FormControl>
        {values.species === "Dog" ? (
          <FormControl marginBottom="4">
            <FormLabel color="#939393" fontWeight="md">
              Size
            </FormLabel>
            <Select
              id="size"
              name="size"
              height="50px"
              focusBorderColor="#00C38A"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.size}
            >
              <option value="Extra small">Extra small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Giant">Giant</option>
            </Select>
            {errors.size && touched.size ? (
              <Text color="red" fontSize="sm" padding="1">
                {errors.size}
              </Text>
            ) : null}
          </FormControl>
        ) : null}
        {values.species === "Dog" ? (
          <FormControl marginBottom="4">
            <FormLabel color="#939393" fontWeight="md">
              Breed
            </FormLabel>
            <Input
              id="breed"
              name="breed"
              height="50px"
              focusBorderColor="#00C38A"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.breed}
            />
            {errors.breed && touched.breed ? (
              <Text color="red" fontSize="sm" padding="1">
                {errors.breed}
              </Text>
            ) : null}
          </FormControl>
        ) : null}
        <FormControl marginBottom="4">
          <FormLabel color="#939393" fontWeight="md">
            Gender
          </FormLabel>
          <Box display="flex">
            <GenderOptionBtn
              border={genderValue === "Male" ? "1px solid #00c38a" : "1px solid #e2e8f0"}
              color={genderValue === "Male" ? "#00c38a" : "#1a202c"}
              onClick={handleMaleBtn}
            >
              Male
            </GenderOptionBtn>
            <GenderOptionBtn
              border={genderValue === "Female" ? "1px solid #00c38a" : "1px solid #e2e8f0"}
              color={genderValue === "Female" ? "#00c38a" : "#1a202c"}
              onClick={handleFemaleBtn}
            >
              Female
            </GenderOptionBtn>
          </Box>
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel color="#939393" fontWeight="md">
            Year of birth
          </FormLabel>
          <Select
            id="yearOfBirth"
            name="yearOfBirth"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.yearOfBirth}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormControl>
        {formBooleanData.map((item) => (
          <FormControl marginBottom="4" key={item.name}>
            <StyledCheckbox onChange={handleChange} value={item.value} name={item.name}>
              <CheckItemText>{item.text}</CheckItemText>
            </StyledCheckbox>
          </FormControl>
        ))}
        <Button
          type="submit"
          bg="#00C38A"
          color="#ffffff"
          fontWeight="md"
          padding="2.5"
          height="50px"
          width="100%"
          marginBottom="4"
        >
          Save
        </Button>
      </form>
    </FormWrapper>
  );
};

export default AddNewPet;
