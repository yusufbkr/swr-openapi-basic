import createClient, { Middleware } from "openapi-fetch";

import type * as Schema from "./schema";

const client = createClient<Schema.paths>({
  baseUrl: `https://petstore3.swagger.io/api/v3`,
  mode: "cors",
});

const getToken = async () => {
  if (typeof window !== "undefined" && (window as any)?.token) {
    return (window as any)?.token;
  }
};

export const api = (token?: string | null) => {
  const auth: Middleware = {
    async onRequest({ request }) {
      token = (await getToken()) || token;

      request.headers.set("Authorization", `Bearer ${token}`);
      return request;
    },
  };

  client.use(auth);

  return client;
};

export default client;
