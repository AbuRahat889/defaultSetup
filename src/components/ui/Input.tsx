// components/FormInput.tsx
import { InputHTMLAttributes } from "react";
import { useFormContext, FieldValues, Path } from "react-hook-form";
import { cn } from "../lib/utils";

interface FormInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
}

export function FormInput<T extends FieldValues>({
  name,
  label,
  className,
  ...rest
}: FormInputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        {...register(name, {
          valueAsNumber: rest.type === "number", // convert input value to number if type is number
        })}
        {...rest}
        className={cn(
          "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          error && "border-red-500",
          className
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

//  <FormInput<FormValues> name="name" label="Full Name" placeholder="John Doe" />
//         <FormInput<FormValues> name="age" label="Age" type="number" placeholder="30" />
