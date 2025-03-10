"use client";

import React from "react";

import { Transition } from "@headlessui/react";
import { Text } from "@/components/atoms/text/text.component";
import { translations } from "@/translations/general";

export const ErrorMessage = ({ error, locale = "nl" }) => {
  const getErrorMessage = () => {
    switch (error) {
      case "pattern":
        return translations.errors.general.pattern[locale];
      case "required":
        return translations.errors.general.required[locale];
      default:
        return undefined;
    }
  };

  const errorMessage = getErrorMessage();
  return (
    <Transition
      as="div"
      show={!!errorMessage}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {errorMessage && (
        <Text level="xs" classnames="text-red-500 ml-0.5 mt-1 font-light">
          {errorMessage}
        </Text>
      )}
    </Transition>
  );
};
