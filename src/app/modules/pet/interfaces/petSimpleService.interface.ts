import { Vet } from "../../vet/interfaces/vet.interface";
import { Pet } from "./pet.interface";

export interface PetSimpleService {
  simpleService: SimpleService;
  pet: Pet;
  vet: Vet
}

export interface SimpleService {
  id: string,
  date: Date,
  name: string,
  description: string,
  symptoms: string,
  treatment: string,
  cost: number,
  fk_id_pet: string,
  fk_id_vet: string
}