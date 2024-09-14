import type { FilterKeys, PathsWithMethod } from "openapi-typescript-helpers";
import type { FetchOptions } from "openapi-fetch";

import type * as Schema from "../schema";

export type Token = {
  token?: string | null;
};

export type Paths = {
  [Path in PathsWithMethod<Schema.paths, "get">]: FetchOptions<
    FilterKeys<Schema.paths[Path], "get">
  >;
};

export type PathNames = keyof Paths;

export type FindGetParams<SearchTerm extends PathNames> = {
  [Path in PathNames]: Path extends SearchTerm ? Paths[Path]["params"] : never;
}[PathNames];
