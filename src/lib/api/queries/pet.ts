import { createFetch } from "@/lib/api/utils/createFetch";
import { createHook } from "@/lib/api/utils/createHook";

export const getPets = createFetch("/pet/findByStatus");
export const getPet = createFetch("/pet/{petId}");

export const useGetPets = createHook(getPets);
export const useGetPet = createHook(getPet);
