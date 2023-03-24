import * as Yup from "yup";

const addPetSchema = Yup.object().shape({
  avatar: Yup.string(),
  name: Yup.string().required("Name is required"),
  species: Yup.string().required("Species is required"),
  breed: Yup.string(),
  size: Yup.string(),
  gender: Yup.string(),
  yearOfBirth: Yup.number(),
  neutered: Yup.boolean(),
  vaccinated: Yup.boolean(),
  chipped: Yup.boolean(),
  houseTrained: Yup.boolean(),
  friendlyWithDogs: Yup.boolean(),
  friendlyWithCats: Yup.boolean(),
  friendlyWithKids: Yup.boolean(),
  friendlyWithAdults: Yup.boolean(),
  description: Yup.string(),
});

export default addPetSchema;
