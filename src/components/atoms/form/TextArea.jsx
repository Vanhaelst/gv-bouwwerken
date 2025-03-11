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
          "block w-full rounded-md outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2",
          "bg-primary-500/20 focus:outline-primary-500 ",
          "py-3 pl-3 pr-9 md:py-5 md:pl-6 md:pr-10",
          "sm:text-sm/6 text-base ",
          error
            ? "text-red-900 outline-red-300 placeholder:text-red-300"
            : "text-primary-500 outline-slate-300 placeholder:text-primary-500/80",
        )}
        {...register}
      />
      <ErrorMessage locale={locale} error={error} />
    </div>
  );
};
