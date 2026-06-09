import type { InputProps } from "react-aria-components";
import { Input as RACInput } from "react-aria-components";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<InputProps, "onChange"> {
  className?: string;
  wrapperClassName?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input = ({ className, wrapperClassName, icon, placeholder, onChange }: Props) => (
  <div className={twMerge("relative w-full", wrapperClassName)}>
    {icon}
    <RACInput
      className={twMerge(
        "w-full outline-accent-dark focus:outline-2 rounded-md border border-accent-dark p-4 pl-10 shadow-input-glow placeholder:text-muted",
        icon ? "pl-12" : "pl-4",
        className
      )}
      defaultValue=""
      placeholder={placeholder}
      aria-label={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
    />
  </div>
);

export default Input;
