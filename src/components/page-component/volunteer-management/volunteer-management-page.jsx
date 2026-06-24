"use client";
import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const VolunteerManagementPage = () => {
  const columns = [
    {
      key: "no",
      title: "No",
      dataIndex: "no",
    },
    {
      key: "unit",
      title: "Unit",
      dataIndex: "unit",
    },
  ];
  const dataSource = [];
  return (
    <div className="flex flex-col gap-2 size-lg">
      <PageHeader
        title="Volunteer Management"
        addHref={"/volunteer-management/add"}
        addLabel="Add Volunteer"
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

export default VolunteerManagementPage;
