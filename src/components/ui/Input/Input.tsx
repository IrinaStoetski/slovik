import type { InputProps } from "react-aria-components";
import { Input as RACInput } from "react-aria-components";
import { twMerge } from "tailwind-merge";

interface Props extends InputProps {
  className?: string;
  wrapperClassName?: string;
  icon?: React.ReactNode;
}

const Input = ({ className, wrapperClassName, icon }: Props) => {
  return (
    <div className={twMerge("relative w-full", wrapperClassName)}>
      {icon}
      <RACInput
        className={twMerge(
          "w-full rounded-md border border-default-border p-4 pl-10 text-default-text shadow-(--text-input-shadow)",
          className,
        )}
        defaultValue=""
        placeholder="Capture a word or phrase"
        aria-label="Capture a word or phrase"
      />
    </div>
  );
};

export default Input;
