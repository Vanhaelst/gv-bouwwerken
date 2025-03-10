"use client";

import { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function OptionVerticalList({
  options,
  name,
  defaultValue,
  clearErrors,
  setValue,
  columns,
}) {
  const [selected, setSelected] = useState({ id: undefined, name: "" });

  const handleChange = (data) => {
    setSelected(data);
    setValue(name, data.value);
    clearErrors(name);
  };

  useEffect(() => {
    if (defaultValue) {
      const value = options.find((option) => option.value === defaultValue);
      handleChange(value);
    } else {
      handleChange(options[0]);
    }
  }, []);

  return (
    <fieldset>
      <RadioGroup
        className={`mt-6 grid grid-cols-1 gap-y-6 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} sm:gap-x-4`}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option}
            aria-label={option.name}
            aria-description={`${option.description}`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-primary-600 data-[focus]:ring-2 data-[focus]:ring-primary-600"
            onClick={() => handleChange(option)}
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">
                  {option.name}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-500">
                  {option.description}
                </span>
              </span>
            </span>
            <CheckCircleIcon
              aria-hidden="true"
              className={`size-5 text-primary-600 ${selected.name === option.name ? "" : "invisible"}`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-primary-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
