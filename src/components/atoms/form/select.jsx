"use client";

import React, { useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  ChevronUpDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Text } from "@/components/atoms/text/text.component";
import clsx from "clsx";
import { ErrorMessage } from "@/components/atoms/form/errorMessage";

export function Select({
  label,
  options,
  name,
  error,
  clearErrors,
  required,
  setValue,
  defaultValue,
  className,
  locale,
}) {
  const [selected, setSelected] = useState({ value: undefined, name: "" });

  useEffect(() => {
    if (defaultValue) {
      const value = options.find((option) => option.value === defaultValue);
      setSelected(value);
    }
  }, []);
  const handleChange = (data) => {
    setSelected(data);
    clearErrors(name);
    setValue(name, data.name);
  };

  return (
    <div className={className ? className : ""}>
      <Listbox value={selected} onChange={handleChange}>
        <Text as="label" level="sm" htmlFor={name}>
          {label}{" "}
          {required && <span className="text-sm/6 text-red-500">*</span>}
        </Text>
        <div className="relative mt-2">
          <ListboxButton
            className={clsx(
              "grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6",
              error
                ? "text-red-900 outline-red-300 placeholder:text-red-300"
                : "text-slate-900 outline-slate-300 placeholder:text-slate-300",
            )}
          >
            <span className="col-start-1 row-start-1 truncate pr-6 h-[24px]">
              {selected.name}
            </span>

            {error ? (
              <ExclamationCircleIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-red-500 sm:size-4"
              />
            ) : (
              <ChevronUpDownIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            )}
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-primary-600 data-[focus]:text-white data-[focus]:outline-none"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {option.name}
                </span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      <ErrorMessage locale={locale} error={error} />
    </div>
  );
}
