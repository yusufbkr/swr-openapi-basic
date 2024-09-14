import { api } from "@/lib/api/client";

import { Token, PathNames, FindGetParams } from "@/lib/api/types/get";

export const createFetch = <Path extends PathNames>(url: Path) => {
  const fetcher = async (options: FindGetParams<Path> & Token) => {
    const { token, query, path } = options;

    const params = {
      ...(query ? { query } : {}),
      ...(path ? { path } : {}),
    };

    // @ts-ignore HELP
    return await api(token).GET(url, {
      params,
    });
  };

  return {
    url,
    fetcher,
  };
};
