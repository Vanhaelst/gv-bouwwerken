import React from "react";
import { ErrorMessage } from "@/components/atoms/form/errorMessage";

export default function Checkbox({ options, register, error, name, locale }) {
  return (
    <fieldset>
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        {options.map((option) => (
          <div key={option.value} className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id={option.id}
                  name={name}
                  type="checkbox"
                  aria-describedby={`${option.value}-description`}
                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  {...register}
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:checked]:opacity-100"
                  />
                  <path
                    d="M3 7H11"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label
                htmlFor={option.value}
                className="font-medium text-gray-900"
              >
                {option.name}
              </label>
              <p id={`${option.value}-description`} className="text-gray-500">
                {option.description}
              </p>
              <ErrorMessage locale={locale} error={error} />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
