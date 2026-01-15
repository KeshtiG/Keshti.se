import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantMap: Record<ButtonVariant, string> = {
  primary: styles["btn-primary"],
  secondary: styles["btn-secondary"],
  tertiary: styles["btn-tertiary"],
};

export default function Button({
  variant = "primary",
  icon,
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = variantMap[variant];

  return (
    <Link href={href}
        className={`${styles.btn} ${variantClass} flex items-center justify-center gap-2 px-2 md:px-8 ${className}`}
        {...props}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
    </Link>
  );
}
