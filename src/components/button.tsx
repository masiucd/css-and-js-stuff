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
  asChild,
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
      style={{cursor: "pointer"}}
      type={type}
      asChild={asChild}
      {...restProps}
    >
      {/* <button className="cursor-pointer">{children}</button> */}
      {children}
    </RadixButton>
  );
}
