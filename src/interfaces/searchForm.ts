export interface SearchFormValues {
  location: string;
  latitude: number;
  longitude: number;
  petService: string;
  selectedDates: [];
  noDogs: boolean;
  noChildren: boolean;
  fencedBackyard: boolean;
  smallDog: number;
  mediumDog: number;
  largeDog: number;
  giantDog: number;
  cat: number;
  smallAnimal: number;
  totalPets: number;
  page: number;
  pageLimit: number;
}

export interface SearchResultsValues {
  location?: string;
  latitude?: number | undefined;
  longitude?: number | undefined;
  petService?: string;
  selectedDates?: [];
  noDogs?: boolean;
  noChildren?: boolean;
  fencedBackyard?: boolean;
  smallDog?: number;
  mediumDog?: number;
  largeDog?: number;
  giantDog?: number;
  cat?: number;
  smallAnimal?: number;
  totalPets?: number;
}
