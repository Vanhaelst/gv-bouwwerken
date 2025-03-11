"use client";

import React from "react";

import { Transition } from "@headlessui/react";
import { Text } from "@/components/atoms/text/text.component";

export const ErrorMessage = ({ error }) => {
  const getErrorMessage = () => {
    switch (error) {
      case "pattern":
        return "E-mail adres niet correct";
      case "required":
        return "Dit veld is verplicht";
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
