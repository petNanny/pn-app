// This is an example petSitter data interface for google map
export interface petSitterData {
  id: number;
  avatar: string;
  name: string;
  rating: number;
  price: number;
  suburb: string;
  field_address: {
    locality: string;
    postal_code: string;
    address_line1: string;
    address_line2: string;
    latitude: number;
    longitude: number;
  };
}
