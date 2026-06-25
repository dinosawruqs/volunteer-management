import UnitManagementPage from "@/components/page-component/unit-management/unit-management-page";
import { createClient } from "@/lib/server";
import React from "react";

const page = async () => {
  const supabase = await createClient();
  const { data: dataSource, error } = await supabase.from("units").select("*");
  if (error) {
    <div>Data tidak ditemukan</div>;
  }
  return <UnitManagementPage dataSource={dataSource} />;
};

export default page;
