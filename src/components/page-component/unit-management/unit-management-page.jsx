"use client";
import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";

const UnitManagementPage = ({ dataSource }) => {
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
      key: "action",
      title: "Action",
      dataIndex: "action",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="Unit Management"
        addLabel="Add Unit"
        addHref="/unit-management/add"
      />
      <MainTable columns={columns} dataSource={dataSource} rowkeys="id" />
    </div>
  );
};

export default UnitManagementPage;
