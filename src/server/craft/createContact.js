export const createContact = async (obj) => {
  const result = await fetch("/api/craft/create/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return result;
};
