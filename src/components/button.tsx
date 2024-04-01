import {Button as RadixButton, type ButtonProps} from "@radix-ui/themes";

type Props = ButtonProps;

export function Button({
  size,
  variant,
  color,
  highContrast,
  radius,
  loading,
  className,
  children,
  type,
  ...restProps
}: Props) {
  return (
    <RadixButton
      size={size}
      variant={variant}
      color={color}
      highContrast={highContrast}
      radius={radius}
      loading={loading}
      className={className}
      type={type}
      asChild
      {...restProps}
    >
      <button>{children}</button>
    </RadixButton>
  );
}
