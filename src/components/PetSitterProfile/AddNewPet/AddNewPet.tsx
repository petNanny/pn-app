import FormWrapper from "../FormWrapper/FormWrapper";
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  useToast,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { petData } from "../../../interfaces/petData";
import { GenderOptionBtn, StyledCheckbox, CheckItemText } from "./styledAddNewPet";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import addPetSchema from "../../../schemas/addPetValidator";
import { useUserAddPetMutation, useGetAllPetsQuery } from "../../../redux/petApi";
import AddPetAvatar from "./components/AddPetAvatar/AddPetAvatar";
import { Navigate, generatePath } from "react-router-dom";

const AddNewPet = () => {
  const toast = useToast();
  const petOwner = useSelector((state: any) => state.petOwner);
  const [newImgBlob, setNewImgBlob] = useState<File | null>(null);
  const [addPet, { isSuccess: isAddPetSuccess }] = useUserAddPetMutation();
  const { refetch: refetchAllPets } = useGetAllPetsQuery(petOwner._id);
  const [genderValue, setGenderValue] = useState("Male");
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      avatar: null,
      petName: "",
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
    validationSchema: addPetSchema,
    onSubmit: async (values: petData) => {
      values.gender = genderValue;
      const formData = new FormData();
      if (newImgBlob) {
        formData.append("avatar", newImgBlob);
      }
      formData.append("petName", values.petName);
      formData.append("species", values.species);
      formData.append("breed", values.breed);
      formData.append("size", values.size);
      formData.append("gender", values.gender);
      formData.append("yearOfBirth", values.yearOfBirth.toString());
      formData.append("neutered", values.neutered.toString());
      formData.append("vaccinated", values.vaccinated.toString());
      formData.append("chipped", values.chipped.toString());
      formData.append("houseTrained", values.houseTrained.toString());
      formData.append("friendlyWithDogs", values.friendlyWithDogs.toString());
      formData.append("friendlyWithCats", values.friendlyWithCats.toString());
      formData.append("friendlyWithKids", values.friendlyWithKids.toString());
      formData.append("friendlyWithAdults", values.friendlyWithAdults.toString());
      formData.append("description", values.description);
      try {
        await addPet({
          petOwnerId: petOwner._id,
          body: formData,
        }).unwrap();
        toast({
          title: "Add a pet successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
        refetchAllPets();
      } catch (error) {
        toast({
          title: "Add a pet failed.",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: { fontSize: "20px", maxWidth: "400px", padding: "10px" },
        });
      }
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

  if (isAddPetSuccess) {
    return <Navigate to={generatePath("/userProfile/my-pets/:id", { id: petOwner._id })} replace />;
  }

  return (
    <FormWrapper title="Your pets">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl marginBottom="4">
          <AddPetAvatar uploadImg={newImgBlob} setUploadImg={setNewImgBlob} />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel color="#939393" fontWeight="md">
            Name
          </FormLabel>
          <Input
            id="petName"
            name="petName"
            height="50px"
            focusBorderColor="#00C38A"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.petName}
          />
          {errors.petName && touched.petName ? (
            <Text color="red" fontSize="sm" padding="1">
              {errors.petName}
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
