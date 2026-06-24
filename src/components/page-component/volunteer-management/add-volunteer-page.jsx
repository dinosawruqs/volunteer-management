"use client";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const AddVolunteerPage = () => {
  const router = useRouter();
  const form = useForm();
  const onSubmit = async (data) => {
    console.log(data, "<- data");
  };
  return (
    <div>
      <PageHeader title="Add Role" />
      <form onSubmit={() => form.onsubmit(onSubmit)}>
        <FieldSet className="w-full max-w-md">
          <FieldGroup>
            <Field>
              <FieldLabel>Name :</FieldLabel>
              <Input />
            </Field>
            <Field orientation="horizontal" className="flex justify-end">
              <Button
                variant="outline"
                type="button"
                onClick={() => router.push("/role-management")}
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

export default AddVolunteerPage;
