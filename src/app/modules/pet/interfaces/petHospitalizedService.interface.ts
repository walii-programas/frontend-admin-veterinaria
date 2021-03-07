import { Vet } from "../../vet/interfaces/vet.interface";
import { Pet } from "./pet.interface";

export interface PetHospitalizedService {
  hospitalizedService: HospitalizedService,
  pet: Pet,
  vet: Vet
}

export interface HospitalizedService {
  id: string;
  date: Date;
  initial_date;
  final_date;
  diagnosis: string;
  description: string;
  symptoms: string;
  treatment: string;
  cost: string;
  fk_id_pet: string;
  fk_id_veterinary: string;
}