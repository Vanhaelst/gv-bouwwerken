"use client";

import React from "react";
import { ErrorMessage } from "@/components/atoms/form/errorMessage";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";

export const TextArea = ({
  autoComplete,
  label,
  name,
  register,
  error,
  className,
  required,
  placeholder,
  locale,
}) => {
  return (
    <div className={`${className} mt-2`}>
      <div className="flex justify-between">
        <Text as="label" level="sm" htmlFor={name}>
          {label}{" "}
          {required && <span className="text-sm/6 text-red-500">*</span>}
        </Text>
      </div>

      <textarea
        placeholder={placeholder}
        id={name}
        name={name}
        rows={3}
        autoComplete={autoComplete}
        className={clsx(
          "col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:pr-9 sm:text-sm/6 resize-none",
          error
            ? "text-red-900 outline-red-300 placeholder:text-red-300"
            : "text-slate-900 outline-slate-300 placeholder:text-slate-300",
        )}
        {...register}
      />
      <ErrorMessage locale={locale} error={error} />
    </div>
  );
};
