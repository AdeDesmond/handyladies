import React from "react";
import { ResetForm } from "../../_components/form/reset-form";

function ResetPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 to-slate-600 min-h-screen  w-full flex items-center justify-center">
      <div className="bg-white w-[60%]  rounded-md shadow-sm p-3">
        <ResetForm />
      </div>
    </div>
  );
}

export default ResetPage;
