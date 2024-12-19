import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/ui/form/signin-form";
import { options } from "../[...nextauth]/options";

export default async function signInPage() {
  const providers = await getProviders();
  const session = await getServerSession(options);

  console.log(session, "session")
  if (session) {
    return redirect("/");
  }
  return <SignInForm providers={providers} />;
}
