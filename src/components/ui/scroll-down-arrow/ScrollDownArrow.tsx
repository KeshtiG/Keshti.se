import styles from "./ScrollDownArrow.module.css";
import { BsChevronDown } from "react-icons/bs";

type ScrollDownArrowProps = {
  className?: string;
}

export default function ScrollDownArrow({ className }: ScrollDownArrowProps) {
  return (
    <BsChevronDown size={32} className={`text-accent-300 ${styles.scrollDown} ${className}`} />
  );
}
