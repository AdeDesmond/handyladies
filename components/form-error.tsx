import { ShieldAlertIcon } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return;
  return (
    <div className="w-[400px] h-8 text-rose-500 flex items-center border gap-x-1 bg-rose-50 px-3 rounded-md border-rose-200 mx-auto ">
      <ShieldAlertIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
