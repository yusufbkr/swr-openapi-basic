import { createFetch } from "@/lib/api/utils/createFetch";
import { createHook } from "@/lib/api/utils/createHook";

export const getUser = createFetch("/user/{username}");

export const useGetUser = createHook(getUser);
