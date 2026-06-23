"use client";
import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";
import React from "react";

const RoleManagementPage = () => {
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
    },
  ];
  return (
    <div className="flex flex-col">
      <PageHeader
        addLabel="Add Role"
        addHref="/role-management/add"
        title="Role Management"
      />
      <MainTable columns={columns} />
    </div>
  );
};

export default RoleManagementPage;
