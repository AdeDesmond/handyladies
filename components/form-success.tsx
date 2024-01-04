import { PartyPopperIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return;
  return (
    <div className="w-[400px] h-8 text-emerald-500 flex items-center border gap-x-1 bg-emerald-50 px-3 rounded-md border-emerald-200 mx-auto ">
      <PartyPopperIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
