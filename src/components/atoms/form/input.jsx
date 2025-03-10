"use client";

import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

import { ErrorMessage } from "@/components/atoms/form/errorMessage";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";

export const Input = ({
  autoComplete,
  label,
  placeholder,
  name,
  type,
  register,
  error,
  className,
  required,
  locale,
}) => {
  return (
    <div className={`${className ? className : ""} mt-2`}>
      <div className="flex justify-between">
        <Text as="label" level="sm" htmlFor={name}>
          {label}{" "}
          {required && <span className="text-sm/6 text-red-500">*</span>}
        </Text>
      </div>
      <div className="mt-2 grid grid-cols-1">
        <input
          placeholder={placeholder}
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={clsx(
            "col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:pr-9 sm:text-sm/6",
            error
              ? "text-red-900 outline-red-300 placeholder:text-red-300"
              : "text-slate-900 outline-slate-300 placeholder:text-slate-300",
          )}
          {...register}
        />
        {error && (
          <ExclamationCircleIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4"
          />
        )}
      </div>

      <ErrorMessage locale={locale} error={error} />
    </div>
  );
};
