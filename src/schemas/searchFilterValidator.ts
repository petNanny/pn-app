import * as Yup from "yup";

const searchFilterSchema = Yup.object().shape({
  location: Yup.string(),
  petService: Yup.string(),
  selectedDates: Yup.array(),
  noDogs: Yup.boolean(),
  noChildren: Yup.boolean(),
  fencedBackyard: Yup.boolean(),
  smallDog: Yup.number(),
  mediumDog: Yup.number(),
  largeDog: Yup.number(),
  giantDog: Yup.number(),
  cat: Yup.number(),
  smallAnimal: Yup.number(),
  totalPets: Yup.number(),
});

export default searchFilterSchema;
