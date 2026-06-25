import AddUnitManagementPage from '@/components/page-component/unit-management/add-unit-management-page'
import { createClient } from '@/lib/server'
import React from 'react'

const page = async () => {
  const supabase = createClient()
  // const {data, error} = await supabase.from("roles")
  return (
    <AddUnitManagementPage />
  )
}

export default page