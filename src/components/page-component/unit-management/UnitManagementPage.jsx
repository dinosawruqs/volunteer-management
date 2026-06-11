import PageHeader from "@/components/shared/PageHeader";
import MainTable from "@/components/shared/TablePagination";

const UnitManagementPage = ({ dataSource }) => {
  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "address",
      title: "Address",
      dataIndex: "address",
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
      <MainTable columns={columns} />
    </div>
  );
};

export default UnitManagementPage;
