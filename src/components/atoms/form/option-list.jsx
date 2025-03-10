"use client";

import { useEffect, useState } from "react";

export function OptionList({
  options,
  name,
  defaultValue,
  clearErrors,
  setValue,
}) {
  const [selected, setSelected] = useState({ id: undefined, name: "" });

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
    setValue(name, data.value);
  };

  return (
    <fieldset
      aria-label="Privacy option"
      className="-space-y-px rounded-md bg-white"
    >
      {options.map((option) => (
        <label
          key={option.value}
          // value={option.value}
          aria-label={option.name}
          aria-description={option.description}
          className="group flex cursor-pointer border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md focus:outline-none has-[:checked]:relative has-[:checked]:bg-primary-50"
        >
          <input
            defaultValue={option.name}
            checked={option.value === selected.value}
            name="privacy-option"
            type="radio"
            className="relative mt-0.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
            onClick={() => handleChange(option)}
          />
          <span className="ml-3 flex flex-col">
            <span className="block text-sm font-medium text-gray-900 group-has-[:checked]:text-primary-900">
              {option.name}
            </span>
            {option.description && (
              <span className="block text-sm text-gray-500 group-has-[:checked]:text-primary-700">
                {option.description}
              </span>
            )}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
