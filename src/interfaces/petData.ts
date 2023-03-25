export interface petData {
  avatar: File | null;
  petName: string;
  species: string;
  breed: string;
  size: string;
  gender: string;
  yearOfBirth: number;
  neutered: boolean;
  vaccinated: boolean;
  chipped: boolean;
  houseTrained: boolean;
  friendlyWithDogs: boolean;
  friendlyWithCats: boolean;
  friendlyWithKids: boolean;
  friendlyWithAdults: boolean;
  description: string;
}
