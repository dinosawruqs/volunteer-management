"use client";
import { createUnitandUser } from "@/app/(admin)/unit-management/add/action";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong." })
    .email({ message: "Format email tidak valid." }),
});

const AddUnitManagementPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const { name, email } = data;
    const toBeSubmitted = {
      unit_name: name,
      admin_name: name,
      email: email,
      password: "password",
    };
    try {
      await createUnitandUser(toBeSubmitted);
      toast.success("Admin berhasil di buat");
      router.push("/unit-management");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <PageHeader title="Add Unit" />
      <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Universitas Unimonggo"
                {...form.register("name")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="unit@mail.com"
                {...form.register("email")}
              />
            </Field>
            {/* <Controller
              name="birthdate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="date">Date of birth</FieldLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="justify-start font-normal"
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-muted-foreground">
                            Choose Date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        defaultMonth={field.value}
                        captionLayout="dropdown"
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
              )}
            /> */}
            <Field orientation="horizontal" className="flex justify-end">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/unit-management")}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
};

export default AddUnitManagementPage;
