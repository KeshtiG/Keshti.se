import React from "react";
import type { LucideIcon } from "lucide-react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = {
    primary: styles["btn-primary"],
    secondary: styles["btn-secondary"],
    tertiary: styles["btn-tertiary"],
  }[variant];

  return (
    <button className={`${styles.btn} ${variantClass} flex items-center justify-center gap-2 ${className}`} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
