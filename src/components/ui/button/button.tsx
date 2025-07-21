import styles from "./styles.module.css";

export function Button({
    text,
    handleClick,
    isSelected
}: {
    text: string;
    handleClick?: () => void;
    isSelected?: boolean;
    styles?: React.CSSProperties;
}) {
    return (
        <button
            onClick={handleClick}
            style={
                isSelected
                    ? { backgroundColor: "#1c1c1c" }
                    : { backgroundColor: "#1428a0" }
            }
            className={styles.button}>
            {text}
        </button>
    );
}
