export interface User {

  id?: number;
  name: string;
  image: string;
  jobTitle: string;
  position?: { lat: string, lng: string };
}
