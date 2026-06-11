'use client';
import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const AssigmentTypePage = () => {
  const columns = [
    {
      key: "no",
      title: "No",
      dataIndex: "no",
      render: (value, record, index) => index + 1,
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "score",
      title: "Score",
      dataIndex: "score",
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
      render: () => <Button variant="outline" size="sm">Edit</Button>,
    }
  ];
  const dataSource = [
    {
      id: 1,
      name: "Type 1",
      score: 85
    },
    {
      id: 2,
      name: "Type 2",
      score: 90
    }
  ];


  return (
    <div className="flex flex-col gap-2 size-lg">
      <PageHeader
        title="Tipe Penugasan"
        addHref={"/assigment-type/add"}
        addLabel={"add assigment"}
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

export default AssigmentTypePage;
