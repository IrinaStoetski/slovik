import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "inline-flex tracking-wide px-4 py-2 items-center font-medium text-white rounded-md duration-300 transition data-[disabled]:opacity-50 cursor-pointer hover:opacity-90 active:opacity-80",
  variants: {
    variant: {
      primary: "bg-gradient-to-r from-accent to-accent-dark text-white",
      secondary:
        "bg-transparent border border-muted hover:border-accent hover:text-accent active:border-accent active:text-accent",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    isPending: {
      true: "cursor-not-allowed",
      false: "",
    },
    size: {
      sm: "text-sm",
      md: "text-base h-10",
      lg: "text-lg px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    isDisabled: false,
    isPending: false,
    size: "md",
  },
});

export const leadingIconStyles = tv({
  base: "mr-2 inline-block",
});

export const loaderStyles = tv({
  base: "animate-spin mr-2",
});
