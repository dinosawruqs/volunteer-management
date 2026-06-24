"use client";
import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SertificationManagementPage = () => {
  const columns = [
    {
      key: "no",
      title: "No",
      dataIndex: "no",
    },
  ];

  const dataSource = [];
  return (
    <div className="flex flex-col gap-2 size-lg">
      <PageHeader
        title="Volunteer Sertification"
        addHref={"/sertification-management/add"}
        addLabel="Add Sertification"
      >
        <Input id="username" type="text" placeholder="Max Leiter" />
        <Button>
          <SearchIcon className="w-4 h-4" />
        </Button>
      </PageHeader>
      <MainTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default SertificationManagementPage;
