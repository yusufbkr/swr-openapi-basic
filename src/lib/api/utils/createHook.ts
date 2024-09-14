import { PathNames, FindGetParams } from "@/lib/api/types/get";
import { useToken } from "@/modules/TokenProvider";

import useSWR, { SWRConfiguration } from "swr";
import { createFetch } from "./createFetch";

export const createHook =
  <Path extends PathNames>(
    createdFetch: ReturnType<typeof createFetch<Path>>
  ) =>
  (
    options: FindGetParams<Path>,
    skip: boolean = false,
    config?: SWRConfiguration
  ) => {
    const token = useToken();

    const { data, ...rest } = useSWR(
      !skip ? [createdFetch.url, options] : null,
      async () => await createdFetch.fetcher({ ...options, token }),
      config
    );

    return { data: data?.data, ...rest };
  };
