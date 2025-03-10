"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/text.component";

export default function OptionSimple({
  options,
  name,
  error,
  clearErrors,
  setValue,
  label,
  required,
  defaultValue,
}) {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    if (defaultValue) {
      const value = options.find((option) => option.value === defaultValue);
      setSelected(value);
    } else {
      handleChange(options[0]);
    }
  }, []);

  const handleChange = (data) => {
    setSelected(data);
    clearErrors(name);
    setValue(name, data.name);
  };

  return (
    <fieldset aria-label="option">
      <div className="space-y-5">
        {label && (
          <Text as="label" level="sm" htmlFor={name}>
            {label}{" "}
            {required && <span className="text-sm/6 text-red-500">*</span>}
          </Text>
        )}
        {options.map((option) => (
          <div key={option.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                checked={option.value === selected.value}
                id={option.id}
                name={name}
                type="radio"
                aria-describedby={`${option.value}-description`}
                className={clsx(
                  "relative size-4 appearance-none rounded-full bg-white border before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden",
                  error
                    ? "text-red-900  border-gray-300 placeholder:text-red-300"
                    : "text-slate-900 border-slate-300 placeholder:text-slate-300",
                )}
                onClick={() => handleChange(option)}
              />
            </div>
            <div className="ml-3 text-sm/6">
              <label
                htmlFor={option.value}
                className="font-medium text-gray-900"
              >
                {option.name}
              </label>
              <p id={`${option.value}-description`} className="text-gray-500">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
