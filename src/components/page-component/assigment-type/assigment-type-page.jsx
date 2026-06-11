import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const AssigmentTypePage = () => {
  return (
    <div className="flex flex-col gap-2 size-lg">
        <h2 className="text-2xl font-bold tracking-tight">Assigment Type</h2>
        <div className="flex items-center justify-end mb-2">
          <Link href="assigment-type/add">
            <Button variant="default" size="sm">
              Add ASSIGMENT
            </Button>
          </Link>
        </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>SCORE</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Ismail Mubarok</TableCell>
            <TableCell>2000</TableCell>
            <TableCell>
              <Button variant="default" size="sm">
                Detail
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AssigmentTypePage;
