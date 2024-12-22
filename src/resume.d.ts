export interface Resume {
  basics: Basics;
  work: Array<Work>;
  education: Array<Education>;
  etcetera: string;
}

interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  summary: string;
  skills: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  city: string;
  region: string;
}

interface Profiles {
  network: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  summary: string;
  startDate: number;
  endDate: number | undefined;
}

interface Education {
  institution: string;
  degree: string;
  summary: string;
  startDate: number;
  endDate: number | undefined;
}
