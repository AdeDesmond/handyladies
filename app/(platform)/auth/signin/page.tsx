import React from "react";
import { SignInForm } from "../../_components/form/sign-in-form";

function SignUpPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex items-center justify-center">
      <div className="bg-white w-[60%]  rounded-md shadow-sm p-3">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignUpPage;
