import styles from "./styles.module.css";

export function Input({
    placeholder,
    value,
    setSearch,
}: {
    placeholder?: string;
    value: string;
    setSearch: (value: string) => void;
}) {
    return (
        <input
            value={value}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
            placeholder={placeholder}
            type="text"
        />
    );
}
