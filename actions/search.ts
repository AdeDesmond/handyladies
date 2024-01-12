"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const searchTerm = formData.get("term");
  if (searchTerm === "string" || "" || !searchTerm) {
    redirect("/");
  }
  redirect(`/search?searchTerm=${searchTerm}`);
}
