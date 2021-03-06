import { PetVaccinationCardDetails } from "./petVaccinationCardDetails.interface";

export interface PetVaccinationCard {
  id: string;
  description: string;
  cost: number;
  fk_id_pet: string;
}

export interface PetVaccinationCardAndVaccines {
  petVaccinationCard: PetVaccinationCard;
  vaccines: PetVaccinationCardDetails[];
}