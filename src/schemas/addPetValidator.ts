import * as Yup from "yup";

const addPetSchema = Yup.object().shape({
  // avatar: Yup.mixed(),
  petName: Yup.string().required("Name is required"),
  species: Yup.string().required("Species is required"),
  breed: Yup.string(),
  size: Yup.string(),
  gender: Yup.string(),
  yearOfBirth: Yup.string(),
  neutered: Yup.string(),
  vaccinated: Yup.string(),
  chipped: Yup.string(),
  houseTrained: Yup.string(),
  friendlyWithDogs: Yup.string(),
  friendlyWithCats: Yup.string(),
  friendlyWithKids: Yup.string(),
  friendlyWithAdults: Yup.string(),
  description: Yup.string(),
});

export default addPetSchema;
