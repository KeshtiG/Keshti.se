import { BsChevronDown } from "react-icons/bs";
import styles from "./ScrollDownArrow.module.css";

type ScrollDownArrowProps = {
    className?: string;
}

export default function ScrollDownArrow({ className }: ScrollDownArrowProps) {
    return (
        <BsChevronDown size={32} className={`text-link-300 ${styles.scrollDown} ${className}`} />
    );
}
