import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonAsLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: never;
};

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "submit" | "button" | "reset";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantMap: Record<ButtonVariant, string> = {
  primary: styles["btn-primary"],
  secondary: styles["btn-secondary"],
  tertiary: styles["btn-tertiary"],
};

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = variantMap[variant];
  const baseClasses = `${styles.btn} ${variantClass} flex items-center justify-center gap-2 px-2 md:px-8 hover:-translate-y-1 transition-all ease-in-out duration-300 ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={baseClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
