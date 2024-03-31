import { cva } from "class-variance-authority";

const variants = cva("", {
  variants: {
    variant: {
      default: "text-govbr-pure-100",
      dark: "text-govbr-pure-0",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export default variants;
