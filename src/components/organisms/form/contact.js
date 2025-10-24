"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { createContact } from "@/server/craft/createContact";
import { sendMail } from "@/server/brevo/sendMail";
import {
  Notification,
  notificationState,
} from "@/components/molecules/notifications";
import { Input } from "@/components/atoms/form/input";
import { TextArea } from "@/components/atoms/form/TextArea";
import { Button } from "@/components/atoms/button";

export const ContactForm = ({ project, slug, id }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      mail: "",
      message: "",
      project,
      slug,
      id,
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await createContact({
        title: data.name,
        ...data,
      });

      await sendMail({
        data,
        templateId: 1,
      });

      setShowSuccess(true);
      setIsSending(false);
      // reset();
    } catch (error) {
      console.error(error);
      setIsSending(false);
      setShowError(true);
    }
  };

  return (
    <>
      <Notification
        title="Succesvol verstuurd"
        subtitle="Bedankt voor uw contactaanvraag. Wij komen hier zo snel mogelijk op terug."
        show={showSuccess}
        setShow={setShowSuccess}
      />
      <Notification
        state={notificationState.error}
        title="Er ging iets mis."
        subtitle="Gelieve het later opnieuw te proberen."
        show={showError}
        setShow={setShowError}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:col-span-5 md:col-start-7 space-y-6"
      >
        <Input
          required
          type="text"
          name="name"
          placeholder="Naam"
          autoComplete="name"
          error={errors?.name?.type}
          register={{
            ...register("name", { required: true }),
          }}
        />
        <Input
          required
          type="phone"
          name="phone"
          placeholder="Telefoonnummer"
          autoComplete="phone"
          error={errors?.phone?.type}
          register={{
            ...register("phone", { required: true }),
          }}
        />
        <Input
          required
          type="text"
          name="mail"
          placeholder="E-mailadres"
          autoComplete="mail"
          error={errors?.mail?.type}
          register={{
            ...register("mail", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }),
          }}
        />
        <TextArea
          type="text"
          name="message"
          placeholder="Uw bericht"
          autoComplete="message"
          error={errors?.message?.type}
          register={{
            ...register("message", { required: false }),
          }}
        />
        <div className="flex justify-end">
          <Button
            disabled={isSending}
            variant="outline"
            color="primary"
            type="submit"
          >
            {isSending ? (
              <span className="loading loading-spinner loading-xs" />
            ) : (
              "Verzenden"
            )}
          </Button>
        </div>
      </form>
    </>
  );
};
