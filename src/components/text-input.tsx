import {TextField} from "@radix-ui/themes";
import {type ReactNode} from "react";

type InputType =
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "password";

interface TextInputProps {
  type: InputType;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
  icon?: ReactNode;
}

export function TextInput({
  type,
  name,
  placeholder,
  required = true,
  className,
  id,
  icon,
}: TextInputProps) {
  return (
    <TextField.Root
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
      id={id}
    >
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
    </TextField.Root>
  );
}
