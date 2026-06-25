"use server";
import { supabaseAdmin } from "@/lib/super-user";


export const createUnitandUser = async (toBeSubmitted) => {
  const { data: dataUser, error: errorUser } =
    await supabaseAdmin.auth.admin.createUser({
      email: toBeSubmitted.email,
      password: toBeSubmitted.password,
      email_confirm: true,
    });

  if (errorUser) {
    // toast.error("Gagal membuat user", errorUser);
    throw new Error(errorUser?.message || "Gagal membuat user");
  }

  const userId = dataUser.user.id;

  const { data: role } = await supabaseAdmin
    .from("roles")
    .select("id")
    .eq("name", "admin_unit")
    .single();

  if (!role) {
    // toast.error("Role tidak ditemukan");
    throw new Error("Role tidak ditemukan");
  }

  const { error: rpcError } = await supabaseAdmin.rpc("create_unit_with_admin", {
    p_unit_name: toBeSubmitted.unit_name,
    p_user_id: userId,
    p_name: toBeSubmitted.admin_name,
    p_role_id: role.id,
  });

  // 4. rollback kalau gagal
  if (rpcError) {
    await supabaseAdmin.auth.admin.deleteUser(userId);
    toast.error("Pembuatan user hampir berhasil");
    throw new Error("Gagal membuat unit");
  }

  return { success: true };
};
