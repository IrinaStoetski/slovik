import { LoaderCircle } from "lucide-react";
import { Button as RACButton } from "react-aria-components";
import type { ButtonProps } from "react-aria-components";

import { buttonStyles, leadingIconStyles, loaderStyles } from "./Button.styles";

interface Props extends ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  leadingIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const Button = ({
  className,
  onClick,
  children,
  variant = "primary",
  leadingIcon,
  isDisabled,
  isPending,
  size = "md",
}: Props) => {
  return (
    <RACButton
      className={buttonStyles({ variant, className, isDisabled, isPending, size })}
      onClick={onClick}
      isDisabled={isDisabled}
      isPending={isPending}
    >
      {leadingIcon && !isPending && <span className={leadingIconStyles()}>{leadingIcon}</span>}
      {isPending && <LoaderCircle className={loaderStyles()} size={16} />}
      {children}
    </RACButton>
  );
};

export default Button;
