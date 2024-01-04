"use client";
import { SyncLoader } from "react-spinners";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { newVerificationToken } from "@/actions/new-verification";

export const NewVerification = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") as string;

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("missing token");
    }
    newVerificationToken(token)
      .then((data) => {
        if (data?.success) {
          setSuccess(data.success);
        }
        if (data?.error) {
          setError(data.error);
        }
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <h2 className="text-center text-xl font-bold">Verify your email</h2>
      </CardHeader>
      <CardContent className="flex w-full items-center justify-center flex-col">
        {!success && !error && <SyncLoader color="#0f172a" />}
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button className="" size="sm" variant="link" asChild>
          <Link href="/auth/signin">Back to login</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
