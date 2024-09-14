import PetsTable from "@/modules/PetsTable";

import { getPets } from "@/lib/api/queries/pet";

export default async function Page() {
  const { data } = await getPets.fetcher({
    query: { status: "available" },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold mb-6">Hello</h1>
      <PetsTable initialData={data} />
    </div>
  );
}
