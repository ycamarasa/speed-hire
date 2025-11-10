export interface CvInterface {
  name: string;
  avatar: string;
  titleJob: string;
  experiences: Experience[];
  skills: string[];
  desc: string;
  isReal?: boolean;
  address: string;
  telf: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github?: string;
}

export interface Experience {
  year: string;
  yearEnd?: string;
  titleJob: string;
  description: string;
}
