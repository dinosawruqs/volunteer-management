"use client";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

const AddUnitManagementPage = () => {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const router = useRouter();

  return (
    <div>
      <PageHeader title="Add Unit" />
      <form autoComplete="off">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Universitas Unimonggo"
              />
            </Field>
            <Controller
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
            />
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
