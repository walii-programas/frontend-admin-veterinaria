export interface Client {
  firstname: string;
  lastname: string;
  dni: string;
  phone: string;
  address: string;
  email?: string;
  password?: string;
}

export interface ClientListAll {
  firstname: string;
  lastname: string;
  dni: string;
  petQuantity: string;
}