"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetPets } from "@/lib/api/queries/pet";

const PetsTable = ({ initialData }: { initialData: any }) => {
  const { data } = useGetPets(
    {
      query: { status: "available" },
    },
    false,
    {
      fallbackData: initialData,
      revalidateOnMount: true,
    }
  );

  const tableData: typeof data = data || initialData;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Status active Pets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!!tableData?.length &&
              tableData.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell className="font-medium">{pet.id}</TableCell>
                  <TableCell>{pet.name}</TableCell>
                  <TableCell>{pet.category?.name}</TableCell>
                  <TableCell className="text-right">
                    {pet.tags?.map((tag) => tag.name).join(", ")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PetsTable;
