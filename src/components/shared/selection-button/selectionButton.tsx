import styles from "./style.module.css";

export function SelectionButton({
    children,
    clickFunction,
    onSelect
}: {
    children: React.ReactNode;
    clickFunction?: () => void;
    onSelect?: () => void;
}) {
    const selectItem = () => {
        clickFunction?.();
        onSelect?.();
    }
    return (
        <button onClick={selectItem} className={styles.selection__button}>
            {children}
        </button>
    );
}
